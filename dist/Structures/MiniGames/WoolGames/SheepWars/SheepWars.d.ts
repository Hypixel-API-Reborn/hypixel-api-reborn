import SheepWarsLayout from './SheepWarsLayout.js';
import type { WoolGamesSheepWarsClassName } from '../../../../Types/Player.js';
declare class SheepWars {
    wins: number;
    losses: number;
    winLossRatio: number;
    kills: number;
    deaths: number;
    killDeathRatio: number;
    killsVoid: number;
    deathsVoid: number;
    killDeathRatioVoid: number;
    killsBow: number;
    deathsBow: number;
    killDeathRatioBow: number;
    killsExplosive: number;
    deathsExplosive: number;
    killDeathRatioExplosive: number;
    killsMelee: number;
    deathsMelee: number;
    killDeathRatioMelee: number;
    magicWoolHit: number;
    damageDealt: number;
    sheepThrown: number;
    gamesPlayed: number;
    kit: WoolGamesSheepWarsClassName | 'None';
    layout: SheepWarsLayout;
    constructor(data: Record<string, any>);
}
export default SheepWars;
//# sourceMappingURL=SheepWars.d.ts.map