import PlayerRewardsMonthlyCrate from './PlayerRewardsMonthlyCrate.js';
declare class PlayerRewards {
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
    constructor(data: Record<string, any>);
}
export default PlayerRewards;
//# sourceMappingURL=PlayerRewards.d.ts.map