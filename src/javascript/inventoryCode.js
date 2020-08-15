/*
 * This is prndev's inventory code.
 * 
 * window.itemData holds the static constant information about all items existing in the game world.
 * $player.inventory holds all writable information about items the player character owns. $player.inventory is persisted by Twine and should hold only minimal information to prevent save state bloat.
 * 
 * The getOwnedItems functions overlay the information of $player.inventory atop those of window.itemData.
 * 
 * TODO: have a function returning the writable item
 */
window.inventoryCode = {
    // search in all items existing in the world
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
    // search in items owned by player
    getOwnedItems : function(predicate) {
        let result = this._getMergedData().filter(predicate);
        return result;
    },
    // search one item owned by player
    getOwnedItem : function(predicate) {
        return this._getMergedData().find(predicate);
    },
    equipItem : function(itemid) {
        let inventory = State.active.variables.player.inventory;
        if (! window.itemData[itemid].NotClothing) {
            // TODO INVENTORY: unequip item(s) of same type – maybe have item type as string?
            inventory[itemid].equipped = true;
        }
    },
    unequipItem : function(itemid) {
        let inventory = State.active.variables.player.inventory;
        if (itemid in inventory) {
            delete inventory[itemid].equipped;
        }
    },
    equipItemToggle : function(itemid) {
        let inventory = State.active.variables.player.inventory;
        if (inventory[itemid].equipped) {
            this.unequipItem(itemid);
        } else {
            this.equipItem(itemid);
        }
    },
    // give an item to the player
    ownItem : function(itemid) {
        if (!(itemid in window.itemData)) {
            console.log(`Item ${itemid} does not exist. Not adding to player inventory.`);
        } else if (itemid in State.active.variables.player.inventory) {
            console.log(`Item ${itemid} already in player inventory. Not adding again.`);
        } else {
            State.active.variables.player.inventory[itemid] = {};
        }
    },
    // take away an item from the
    disownItem : function(itemid) {
        if (itemid in State.active.variables.player.inventory) {
            delete State.active.variables.player.inventory[itemid];
        }
    },
    // prepend image path for displaying item visually
    imgSrc : function (item) {
        return "Images/items/" + item.image;
    }
};
