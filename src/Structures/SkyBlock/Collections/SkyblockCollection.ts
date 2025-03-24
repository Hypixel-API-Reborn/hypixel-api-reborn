import SkyblockCollectionTier from './SkyblockCollectionTier.js';

class SkyblockCollection {
  id: string;
  name: string;
  maxTiers: number;
  tiers: SkyblockCollectionTier[];
  constructor(data: Record<string, any>, id: string) {
    this.id = id;
    this.name = data?.name || 'UNKNOWN';
    this.maxTiers = data?.maxTiers || 0;
    this.tiers = (data?.tiers || []).map((tier: Record<string, any>) => new SkyblockCollectionTier(tier));
  }
}

export default SkyblockCollection;
