class SkyBlockCollectionTier {
  tier: number;
  amountRequired: number;
  unlocks: string[];
  constructor(data: Record<string, any>) {
    this.tier = data?.tier || 0;
    this.amountRequired = data?.amountRequired || 0;
    this.unlocks = data?.unlocks || [];
  }
}

export default SkyBlockCollectionTier;
