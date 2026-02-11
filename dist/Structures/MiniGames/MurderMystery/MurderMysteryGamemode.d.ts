import type { MurderMysteryMapName, MurderMysteryMode } from '../../../Types/Player.js';
declare class MurderMysteryGamemode {
    alphaWins: number;
    bowKills: number;
    tokensPickedUp: number;
    deaths: number;
    detectiveWins: number;
    games: number;
    kills: number;
    lastOneAlive: number;
    longestTimeAsSurvivorSeconds: number;
    murdererWins: number;
    quickestDetectiveWinTimeSeconds: number;
    quickestMurdererWinTimeSeconds: number;
    quickestShowdownWinTimeSeconds: number;
    showdownPotg: number;
    suicides: number;
    survivorWins: number;
    totalTimeSurvivedSeconds: number;
    wasHero: number;
    wins: number;
    constructor(data: Record<string, any>, gamemode: MurderMysteryMode, map?: MurderMysteryMapName);
}
export default MurderMysteryGamemode;
//# sourceMappingURL=MurderMysteryGamemode.d.ts.map