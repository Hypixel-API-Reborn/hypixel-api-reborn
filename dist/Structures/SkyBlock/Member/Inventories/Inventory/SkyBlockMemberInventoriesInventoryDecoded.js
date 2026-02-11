import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';
class SkyBlockMemberInventoriesInventoryDecoded {
    items;
    constructor(data) {
        this.items = [];
        for (let i = 0; i < data.length; i++) {
            if (!data[i]?.id)
                continue;
            this.items.push(new SkyBlockInventoryItem(data[i]));
        }
    }
}
export default SkyBlockMemberInventoriesInventoryDecoded;
//# sourceMappingURL=SkyBlockMemberInventoriesInventoryDecoded.js.map