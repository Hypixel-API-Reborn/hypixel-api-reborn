import CaptureTheWool from './CaptureTheWool.js';
import SheepWars from './SheepWars.js';
import WoolWars from './WoolWars.js';
import type { WoolGamesPrivateGameConfig } from '../../../Types/Player.js';
declare class WoolGames {
    layers: number;
    xp: number;
    exactLevel: number;
    level: number;
    coins: number;
    ownedCosmetics: string[];
    privateGamesConfig: WoolGamesPrivateGameConfig;
    playtime: number;
    woolWars: WoolWars;
    captureTheWool: CaptureTheWool;
    sheepWars: SheepWars;
    constructor(data: Record<string, any>);
    convertXPToLevel(exp: number): number;
}
export default WoolGames;
//# sourceMappingURL=WoolGames.d.ts.map