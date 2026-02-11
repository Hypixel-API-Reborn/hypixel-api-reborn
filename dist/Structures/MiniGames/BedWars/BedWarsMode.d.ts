import BedWarsBeds from './BedWarsBeds.js';
import BedWarsKillsDeaths from './BedWarsKillsDeaths/BedWarsKillsDeaths.js';
import BedWarsResourcesCollected from './BedWarsResourcesCollected.js';
import type { BedWarsModeId } from '../../../Types/Player.js';
declare class BedWarsMode {
    resourcesCollected: BedWarsResourcesCollected;
    kills: BedWarsKillsDeaths;
    finals: BedWarsKillsDeaths;
    beds: BedWarsBeds;
    winstreak: number;
    wins: number;
    losses: number;
    winLossRatio: number;
    gamesPlayed: number;
    constructor(data: Record<string, any>, mode?: BedWarsModeId);
}
export default BedWarsMode;
//# sourceMappingURL=BedWarsMode.d.ts.map