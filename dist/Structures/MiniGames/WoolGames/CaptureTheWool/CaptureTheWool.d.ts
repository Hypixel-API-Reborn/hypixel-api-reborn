import InventoryLayout from '../../Shared/InventoryLayout.js';
declare class CaptureTheWool {
    kills: number;
    assists: number;
    mostKillsAndAssists: number;
    deaths: number;
    killDeathRatio: number;
    killsWithWool: number;
    deathsWithWool: number;
    killDeathRatioWithWool: number;
    killsOnWoolHolder: number;
    deathsToWoolHolder: number;
    woolCaptured: number;
    woolStolen: number;
    woolCaptureStolenRatio: number;
    mostGoldEarned: number;
    goldEarned: number;
    goldSpent: number;
    experiencedWins: number;
    experiencedDraws: number;
    experiencedLosses: number;
    experiencedWinLossRatio: number;
    participatedWins: number;
    participatedDraws: number;
    participatedLosses: number;
    participatedWinLossRatio: number;
    fastestWoolCapture: number;
    fastestWin: number;
    longestGame: number;
    layout: InventoryLayout;
    constructor(data: Record<string, any>);
}
export default CaptureTheWool;
//# sourceMappingURL=CaptureTheWool.d.ts.map