declare class PitInventoryItem {
    itemId: number;
    count: number;
    name: string | null;
    lore: string | null;
    loreArray: string[];
    extraAttributes: object | null;
    constructor(data: Record<string, any>);
}
export default PitInventoryItem;
//# sourceMappingURL=PitInventoryItem.d.ts.map