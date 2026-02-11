class PitInventoryItem {
    itemId;
    count;
    name;
    lore;
    loreArray;
    extraAttributes;
    constructor(data) {
        this.itemId = data?.id || 0;
        this.count = data?.Count || 0;
        this.name = data?.tag?.display?.Name
            ? data?.tag?.display?.Name?.toString().replace(/§([1-9]|[a-f])|§/gm, '')
            : null;
        this.lore = data?.tag?.display?.Lore ? data?.tag?.display?.Lore?.join('\n') : null;
        this.loreArray = data?.tag?.display?.Lore ?? [];
        this.extraAttributes = data?.tag?.ExtraAttributes ?? null;
    }
}
export default PitInventoryItem;
//# sourceMappingURL=PitInventoryItem.js.map