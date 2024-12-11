import MonthlyCrate from './MonthlyCrate.js';

class Rewards {
  lastAdsenseGenerateTime: number;
  lastClaimedReward: number;
  rewardHighScore: number;
  rewardScore: number;
  rewardStreak: number;
  rewardTokens: number;
  totalDailyRewards: number;
  totalRewards: number;
  monthlyCrates: MonthlyCrate[];
  constructor(data: Record<string, any>) {
    this.lastAdsenseGenerateTime = data.lastAdsenseGenerateTime || 0;
    this.lastClaimedReward = data.lastClaimedReward || 0;
    this.rewardHighScore = data.rewardHighScore || 0;
    this.rewardScore = data.rewardScore || 0;
    this.rewardStreak = data.rewardStreak || 0;
    this.rewardTokens = data.adsence_tokens || 0;
    this.totalDailyRewards = data.totalDailyRewards || 0;
    this.totalRewards = data.totalRewards || 0;
    this.monthlyCrates = [];
    Object.keys(data?.monthlycrates || {}).forEach((key) =>
      this.monthlyCrates.push(new MonthlyCrate(data?.monthlycrates?.[key], key))
    );
  }
}

export default Rewards;
