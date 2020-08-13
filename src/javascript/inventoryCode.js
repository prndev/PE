window.inventoryCode = {
    getItems : function(predicate) {
        if (!predicate) {
            predicate = i => true;
        }
        return Object.values(window.itemInfo).filter(predicate);
    },
    _getMergedData() {
        let inventory = State.active.variables.player.inventory;
        let ownedItems = Object.entries(inventory).map(
            ([itemid, item]) => {
                if (itemid in window.itemInfo) {
                    return Object.assign({}, window.itemInfo[itemid], item);
                } else {
                    return null;
                }
            }
        ).filter(i => i !== null);
        return ownedItems;
    },
    getOwnedItems : function(predicate) {
        //console.log(`getOwnedItems(${predicate})`, predicate);
        let result = this._getMergedData().filter(predicate);
        //console.log(result);
        return result;
    },
    getOwnedItem : function(predicate) {
        return this._getMergedData().find(predicate);
    },
    equipItem : function(itemid) {
        let inventory = State.active.variables.player.inventory;
        if (! window.itemInfo[itemid].NotClothing) {
            inventory[itemid].equipped = true;
        }
    },
    unequipItem : function(itemid) {
        let inventory = State.active.variables.player.inventory;
        delete inventory[itemid].equipped;
    },
    equipItemToggle : function(itemid) {
        let inventory = State.active.variables.player.inventory;
        if (inventory[itemid].equipped) {
            this.unequipItem(itemid);
        } else {
            this.equipItem(itemid);
        }
    },
    ownItem : function(itemid) {
        if (!(itemid in State.active.variables.player.inventory)) {
            State.active.variables.player.inventory[itemid] = {};
        }
    },
    disownItem : function(itemid) {
        if (itemid in State.active.variables.player.inventory) {
            delete State.active.variables.player.inventory[itemid];
        }
    }
};
