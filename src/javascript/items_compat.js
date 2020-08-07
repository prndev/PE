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

window.itemF = {
	image: function(item) {
		return item.image;
	},
	itemTwee: function(id) {
		return new Proxy(window.items[id], {
			get: function(target, name, receiver) {
				console.log(`persistent item ${id} proxy get`, name);
				debugger;
				return Reflect.get(...arguments);
			},
			set: function(obj, prop, value) {
				console.log(`persistent item ${id} proxy set`, prop);
				return Reflect.set(...arguments);
			}
		})
	},
};

let insert_proxies = function(storage, namespace) {
	if (!storage) {
		return;
	}
	Object.entries(window.itemInfo).forEach(
		([id, item]) => storage[id] = new Proxy(item, {
			get: function(target, name, receiver) {
				console.log(`${namespace} item ${id} proxy get`, name);
				return Reflect.get(...arguments);
			},
			set: function(obj, prop, value) {
				console.log(`${namespace} item ${id} proxy set`, prop);
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