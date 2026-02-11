import SkyBlockInventoryItem from '../Inventory/SkyBlockInventoryItem.js';
class SkyBlockMuseumItem {
    name;
    donated;
    donatedAt;
    featuredSlot;
    borrowing;
    items;
    constructor(name, data, decoded) {
        this.name = name;
        this.donated = data?.donated_time || 0;
        this.donatedAt = new Date(this.donated);
        this.featuredSlot = data?.featured_slot || null;
        this.borrowing = data?.borrowing || false;
        this.items = [];
        decoded.forEach((item) => {
            if (!item.tag)
                return;
            this.items.push(new SkyBlockInventoryItem(item));
        });
    }
    toString() {
        return this.name;
    }
}
export default SkyBlockMuseumItem;
//# sourceMappingURL=SkyBlockMuseumItem.js.map