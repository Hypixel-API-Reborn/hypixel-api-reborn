import SkyBlockInventoryItem from '../Inventory/SkyBlockInventoryItem.js';
declare class SkyBlockMuseumItem {
    name: string;
    donated: number;
    donatedAt: Date;
    featuredSlot: string | null;
    borrowing: boolean;
    items: SkyBlockInventoryItem[];
    constructor(name: string, data: Record<string, any>, decoded: any[]);
    toString(): string;
}
export default SkyBlockMuseumItem;
//# sourceMappingURL=SkyBlockMuseumItem.d.ts.map