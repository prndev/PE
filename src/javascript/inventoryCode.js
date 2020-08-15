window.inventoryCode = {
    getItems : function(predicate) {
        if (!predicate) {
            predicate = i => true;
        }
        return Object.values(window.itemData).filter(predicate);
    },
    _getMergedData() {
        let inventory = State.active.variables.player.inventory;
        let ownedItems = Object.entries(inventory).map(
            ([itemid, item]) => {
                if (itemid in window.itemData) {
                    return Object.assign({}, window.itemData[itemid], item);
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
        if (! window.itemData[itemid].NotClothing) {
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
        if (!(itemid in window.itemData)) {
            console.log(`Item ${itemid} does not exist. Not adding to player inventory.`);
        } else if (itemid in State.active.variables.player.inventory) {
            console.log(`Item ${itemid} already in player inventory. Not adding again.`);
        } else {
            State.active.variables.player.inventory[itemid] = {};
        }
    },
    disownItem : function(itemid) {
        if (itemid in State.active.variables.player.inventory) {
            delete State.active.variables.player.inventory[itemid];
        }
    }
};
