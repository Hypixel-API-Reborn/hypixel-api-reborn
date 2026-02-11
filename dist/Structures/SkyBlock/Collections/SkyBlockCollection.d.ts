import SkyBlockCollectionTier from './SkyBlockCollectionTier.js';
declare class SkyBlockCollection {
    id: string;
    name: string;
    maxTiers: number;
    tiers: SkyBlockCollectionTier[];
    constructor(data: Record<string, any>, id: string);
    toString(): string;
}
export default SkyBlockCollection;
//# sourceMappingURL=SkyBlockCollection.d.ts.map