import SkyBlockCollectionTier from './SkyBlockCollectionTier.js';

class SkyBlockCollection {
  id: string;
  name: string;
  maxTiers: number;
  tiers: SkyBlockCollectionTier[];
  constructor(data: Record<string, any>, id: string) {
    this.id = id;
    this.name = data?.name || 'UNKNOWN';
    this.maxTiers = data?.maxTiers || 0;
    this.tiers = (data?.tiers || []).map((tier: Record<string, any>) => new SkyBlockCollectionTier(tier));
  }

  toString(): string {
    return this.id;
  }
}

export default SkyBlockCollection;
