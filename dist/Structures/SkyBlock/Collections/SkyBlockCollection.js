import SkyBlockCollectionTier from './SkyBlockCollectionTier.js';
class SkyBlockCollection {
    id;
    name;
    maxTiers;
    tiers;
    constructor(data, id) {
        this.id = id;
        this.name = data?.name || 'UNKNOWN';
        this.maxTiers = data?.maxTiers || 0;
        this.tiers = (data?.tiers || []).map((tier) => new SkyBlockCollectionTier(tier));
    }
    toString() {
        return this.id;
    }
}
export default SkyBlockCollection;
//# sourceMappingURL=SkyBlockCollection.js.map