window.inventoryCode = {
    getItem : function(predicate) {
        console.log(`getItem(${predicate})`, predicate);
        let inventory = State.active.variables.player.inventory;
        console.log(inventory);
        let ownedItems = Object.entries(inventory).map(
            ([itemid, item]) => Object.assign({}, window.items[itemid], item)
        );
        console.log(ownedItems);
        let result = ownedItems.find(predicate);
        console.log(result);
        return result;
    },
    equipItem : function(itemid) {
        let inventory = State.active.variables.player.inventory;
        inventory[itemid].equipped = true;
    }
};

//Object.entries(SugarCube.State.active.variables.player.inventory).map(([itemid, item]) => Object.assign({}, window.items[itemid], item))
