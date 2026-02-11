class SkyBlockCollectionTier {
    tier;
    amountRequired;
    unlocks;
    constructor(data) {
        this.tier = data?.tier || 0;
        this.amountRequired = data?.amountRequired || 0;
        this.unlocks = data?.unlocks || [];
    }
}
export default SkyBlockCollectionTier;
//# sourceMappingURL=SkyBlockCollectionTier.js.map