import SkyWarsHeads from '../SkyWarsHeads.ts';
import SkyWarsKillsDeaths from '../SkyWarsKillsDeaths.ts';
import type { SkyWarsKitId, SkyWarsModeId } from '../../../../Types/Player.ts';
declare class BaseSkyWarsMode {
    kills: SkyWarsKillsDeaths;
    deaths: SkyWarsKillsDeaths;
    heads: SkyWarsHeads;
    wins: number;
    losses: number;
    WLRatio: number;
    gamesPlayed: number;
    timePlayed: number;
    winstreak: number;
    survivedPlayers: number;
    chestsOpened: number;
    killstreak: number;
    longestBowKill: number;
    fastestWin: number;
    assists: number;
    mostKillsGame: number;
    longestBowShot: number;
    arrowsHit: number;
    arrowsShot: number;
    shard: number;
    mobsKilled: number;
    blocksBroken: number;
    blocksPlaced: number;
    eggThrown: number;
    enderpearlsThrown: number;
    itemsEnchanted: number;
    constructor(data: Record<string, any>, mode?: SkyWarsModeId | SkyWarsKitId);
}
export default BaseSkyWarsMode;
//# sourceMappingURL=BaseSkyWarsMode.d.ts.map