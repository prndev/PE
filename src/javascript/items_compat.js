/* these definitions are for backwards compatibility and should go eventually */

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
		return window.itemsC[id];
	},
};