/*
 * This contains functions for making legacy code work with the new inventory system.
 * It is not perfect, but gets the work done.
 * 
 * All these functions should be removed, eventually.
 */

window.itemTypes={
	NotClothing:   0,
	Underwear:     1,
	Outerwear:     2,
	Shoes:         4,
	Bras:          8,
	Chastity:     16,
	AnalPlug:     32,
	Stockings:    64,
	Earrings:    128,
	Collar:      256,
	Extra:       512,
	Hairband:   1024
};

let make_ownAlt_proxy = function(itemid, ownAlt, namespace) {
	return new Proxy(ownAlt, {
		set: function(obj, prop, value) {
			console.log(`${namespace} item ${itemid} ownAlt proxy set`, prop);
			if (value) {
				console.log(`${namespace} item ${itemid} ownAlt proxy adds ${itemid+prop} to player inventory`);
				window.inventoryCode.ownItem(itemid+prop);
			} else {
				console.log(`${namespace} item ${itemid} ownAlt proxy removes ${itemid+prop} from player inventory`);
				window.inventoryCode.disownItem(itemid+prop);
			}
			return prop;
		}
	})
}

// this once was itemFunctions, probably
window.itemF = {
	image: function(item) {
		return item.image;
	},
	itemTwee: function(itemid) {
		// this once returned data from State.variables.items
		// but somewhere along the line devs got confused with itemsC
		return new Proxy({}, {
			get: function(target, name, receiver) {
				console.log(`persistent item ${itemid} proxy get`, name);
				if (name === 'ownAlt') {
					let ownAlt = window.inventoryCode.getOwnedItems(i => i && i.id.startsWith(itemid)).map(i => +i.id.replace(/[a-zA-Z]+/,''));
					return make_ownAlt_proxy(itemid, ownAlt, 'persistent');
				}
				return Reflect.get(...arguments);
			},
			set: function(obj, prop, value) {
				console.log(`persistent item ${itemid} proxy set`, prop);
				return Reflect.set(...arguments);
			}
		})
	},
};

let insert_proxies = function(storage, namespace) {
	if (!storage) {
		return;
	}
	// prepare proxies for legacy item ids
	// new item ids have proxies, too – they do get passed around in legacy code
	let entries = [];
	entries.push(...Object.entries(window.baseItemData));
	entries.push(...Object.entries(window.itemData));
	entries.forEach(
		([itemid, item]) => storage[itemid] = new Proxy(item, {
			get: function(target, name, receiver) {
				console.log(`${namespace} item ${itemid} proxy get`, name);
				if (name === 'maxAlt') {
					let maxAlt = window.inventoryCode.getItems(i => i && i.id.startsWith(itemid)).length-1;
					console.log(`${namespace} item ${itemid} proxy get maxAlt`, maxAlt);
					return maxAlt;
				} else if (name === 'ownAlt') {
					let ownAlt = window.inventoryCode.getOwnedItems(i => i && i.id.startsWith(itemid)).map(i => +i.id.replace(/[a-zA-Z]+/,''));
					return make_ownAlt_proxy(itemid, ownAlt, namespace);
				}
				return Reflect.get(...arguments);
			},
			set: function(obj, prop, value) {
				console.log(`${namespace} item ${itemid} proxy set`, prop);
				return Reflect.set(...arguments);
			}
		})
	);
	return storage;
}

// I have no idea how items is different from itemsC.
// itemsC once probably meant "constant items" – but its meaning has been long lost
window.items = insert_proxies({}, "items");
window.itemsC = insert_proxies({}, "itemsC");

// setup a proxy for use with $items
// Twine State (fortunately) cannot hold a Proxy – we need to re-populate it every time before rendering
$(document).on(':passagestart', function (ev) {
	insert_proxies(State.active.variables.items, "$items");
});
// pretend $items has always been empty so Twine does not get confused
// State.active.variables.items cannot be deleted as global references would become undefined
$(document).on(':passageinit', function (ev) {
	if (!State.active.variables.items) {
		State.active.variables.items = {};
	}
	Object.keys(State.active.variables.items).forEach(k => delete State.active.variables.items[k]);
});