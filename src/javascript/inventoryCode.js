window.inventoryCode = {
    getItems : function(predicate) {
        if (!predicate) {
            predicate = i => true;
        }
        return Object.values(window.itemInfo).filter(predicate);
    },
    getOwnedItems : function(predicate) {
        //console.log(`getOwnedItems(${predicate})`, predicate);
        let inventory = State.active.variables.player.inventory;
        let ownedItems = Object.entries(inventory).map(
            ([itemid, item]) => Object.assign({}, window.itemInfo[itemid], item)
        );
        let result = ownedItems.filter(predicate);
        //console.log(result);
        return result;
    },
    getOwnedItem : function(predicate) {
        let result = this.getOwnedItems(predicate); // maybe use find instead?
        return result ? result[0] : undefined;
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
};
