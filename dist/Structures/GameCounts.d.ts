import type RequestData from '../Private/RequestData.js';
declare class GameCounts {
    playerCount: number;
    [x: string]: object | number;
    constructor(data: Record<string, any>);
    toString(): number;
    isRaw(): this is RequestData;
}
export default GameCounts;
//# sourceMappingURL=GameCounts.d.ts.map