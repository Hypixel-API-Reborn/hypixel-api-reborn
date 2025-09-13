import PlayerRewardsMonthlyCrate from './PlayerRewardsMonthlyCrate.js';

class PlayerRewards {
  adsenseTokens: number;
  lastAdsenseGenerateTimeAt: Date | null;
  lastClaimedReward: number;
  rewardHighScore: number;
  rewardScore: number;
  rewardStreak: number;
  rewardTokens: number;
  totalDailyRewards: number;
  totalRewards: number;
  monthlyCrates: PlayerRewardsMonthlyCrate[];
  constructor(data: Record<string, any>) {
    this.adsenseTokens = data?.adsense_tokens || 0;
    this.lastAdsenseGenerateTimeAt = data?.lastAdsenseGenerateTime ? new Date(data?.lastAdsenseGenerateTime) : null;
    this.lastClaimedReward = data?.lastClaimedReward || 0;
    this.rewardHighScore = data?.rewardHighScore || 0;
    this.rewardScore = data?.rewardScore || 0;
    this.rewardStreak = data?.rewardStreak || 0;
    this.rewardTokens = data?.adsence_tokens || 0;
    this.totalDailyRewards = data?.totalDailyRewards || 0;
    this.totalRewards = data?.totalRewards || 0;
    this.monthlyCrates = Object.keys(data?.monthlycrates || {}).map(
      (key) => new PlayerRewardsMonthlyCrate(data?.monthlycrates?.[key], key)
    );
  }
}

export default PlayerRewards;
