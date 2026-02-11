class SkyBlockGardenActiveVisitorRequirement {
    originalItem;
    originalAmount;
    item;
    amount;
    constructor(data) {
        this.originalItem = data?.original_item || '';
        this.originalAmount = data?.original_amount || 0;
        this.item = data?.item || '';
        this.amount = data?.amount || 0;
    }
    toString() {
        return this.amount;
    }
}
export default SkyBlockGardenActiveVisitorRequirement;
//# sourceMappingURL=SkyBlockGardenActiveVisitorRequirement.js.map