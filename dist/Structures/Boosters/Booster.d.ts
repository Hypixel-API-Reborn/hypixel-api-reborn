import Game from '../Game.js';
import type RequestData from '../../Private/RequestData.js';
import type { BoosterType } from '../../Types/Booster.js';
declare class Booster {
    purchaser: string;
    amount: number;
    originalLength: number;
    remaining: number;
    activatedTimestamp: number;
    activated: Date;
    game: Game;
    isActive: boolean;
    type: BoosterType;
    stackers: string[];
    expired: boolean;
    constructor(data: Record<string, any>);
    toString(): string;
    isRaw(): this is RequestData;
    static parseType(data: Record<string, any>): BoosterType;
}
export default Booster;
//# sourceMappingURL=Booster.d.ts.map