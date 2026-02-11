import GameCountGames from './GameCountsGames.ts';
import type RequestData from '../../../Private/RequestData.ts';
declare class GameCounts {
    playerCount: number;
    games: GameCountGames;
    constructor(data: Record<string, any>);
    toString(): number;
    isRaw(): this is RequestData;
}
export default GameCounts;
//# sourceMappingURL=GameCounts.d.ts.map