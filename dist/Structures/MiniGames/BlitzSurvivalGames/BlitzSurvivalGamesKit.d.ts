import BlitzSurvivalGamesData from './BlitzSurvivalGamesData.ts';
import type { BlitzSurvivalGamesKitId } from '../../../Types/Player.ts';
declare class BlitzSurvivalGamesKit extends BlitzSurvivalGamesData {
    level: number;
    exp: number;
    prestige: number;
    inventory: Record<string, string>;
    constructor(data: Record<string, any>, kitName: BlitzSurvivalGamesKitId);
}
export default BlitzSurvivalGamesKit;
//# sourceMappingURL=BlitzSurvivalGamesKit.d.ts.map