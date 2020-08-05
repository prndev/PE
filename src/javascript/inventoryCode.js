window.inventoryCode = {
    getItem : function(predicate) {
        console.log(`getItem(…)`, predicate);
        let inventory = State.active.variables.player.inventory;
        let result = Object.entries(inventory).map(
            ([itemid, item]) => Object.assign({}, window.items[itemid], item)
        ).find(predicate);
        console.log(result);
        return result;
    }
};

//Object.entries(SugarCube.State.active.variables.player.inventory).map(([itemid, item]) => Object.assign({}, window.items[itemid], item))