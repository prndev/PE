window.inventoryCode = {
    getItems : function(predicate) {
        //console.log(`getItems(${predicate})`, predicate);
        let inventory = State.active.variables.player.inventory;
        let ownedItems = Object.entries(inventory).map(
            ([itemid, item]) => Object.assign({}, window.itemsC[itemid], item)
        );
        let result = ownedItems.filter(predicate);
        //console.log(result);
        return result;
    },
    getItem : function(predicate) {
        let result = this.getItems(predicate); // maybe use find instead?
        return result ? result[0] : undefined;
    },
    equipItem : function(itemid) {
        let inventory = State.active.variables.player.inventory;
        inventory[itemid].equipped = true;
    },
    unequipItem : function(itemid) {
        let inventory = State.active.variables.player.inventory;
        delete inventory[itemid].equipped;
    }
};
