class SeasonBingoTier {
  objectives: Record<string, number>;
  rewards: string[];
  constructor(data: Record<string, any>) {
    this.objectives = data.objectives || {};
    this.rewards = data.rewards || [];
  }
}

export default SeasonBingoTier;
