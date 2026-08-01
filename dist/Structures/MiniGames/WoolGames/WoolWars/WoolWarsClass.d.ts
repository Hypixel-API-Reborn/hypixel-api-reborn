import InventoryLayout from '../../Shared/InventoryLayout.js';
import type { WoolGamesWoolWarsClassName } from '../../../../Types/Player.js';
declare class WoolWarsClass {
    wins: number;
    kills: number;
    assists: number;
    deaths: number;
    killDeathRatio: number;
    gamesPlayed: number;
    woolsPlaced: number;
    blocksBroken: number;
    placeBreakRatio: number;
    powerUps: number;
    layout: InventoryLayout;
    constructor(data: Record<string, any>, className: WoolGamesWoolWarsClassName);
}
export default WoolWarsClass;
//# sourceMappingURL=WoolWarsClass.d.ts.map