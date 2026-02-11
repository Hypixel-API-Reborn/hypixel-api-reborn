declare class PlayerTourneyData {
    tourneyName: string;
    playtime: number;
    tributes: number;
    firstWinTimestamp: number | null;
    firstWinAt: Date | null;
    claimedReward: number;
    constructor(data: Record<string, any>, tourneyName: string);
}
export default PlayerTourneyData;
//# sourceMappingURL=PlayerTourneyData.d.ts.map