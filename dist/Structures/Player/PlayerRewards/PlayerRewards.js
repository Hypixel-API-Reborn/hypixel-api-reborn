import PlayerRewardsMonthlyCrate from './PlayerRewardsMonthlyCrate.js';
class PlayerRewards {
    adsenseTokens;
    lastAdsenseGenerateTimeAt;
    lastClaimedReward;
    rewardHighScore;
    rewardScore;
    rewardStreak;
    rewardTokens;
    totalDailyRewards;
    totalRewards;
    monthlyCrates;
    constructor(data) {
        this.adsenseTokens = data?.adsense_tokens || 0;
        this.lastAdsenseGenerateTimeAt = data?.lastAdsenseGenerateTime ? new Date(data?.lastAdsenseGenerateTime) : null;
        this.lastClaimedReward = data?.lastClaimedReward || 0;
        this.rewardHighScore = data?.rewardHighScore || 0;
        this.rewardScore = data?.rewardScore || 0;
        this.rewardStreak = data?.rewardStreak || 0;
        this.rewardTokens = data?.adsence_tokens || 0;
        this.totalDailyRewards = data?.totalDailyRewards || 0;
        this.totalRewards = data?.totalRewards || 0;
        this.monthlyCrates = Object.keys(data?.monthlycrates || {}).map((key) => new PlayerRewardsMonthlyCrate(data?.monthlycrates?.[key], key));
    }
}
export default PlayerRewards;
//# sourceMappingURL=PlayerRewards.js.map