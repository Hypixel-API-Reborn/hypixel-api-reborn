import Game from './Game.js';
import type RequestData from '../Private/RequestData.js';
declare class RecentGame {
    game: Game | null;
    dateTimestamp: number | null;
    dateAt: Date | null;
    mode: string | null;
    map: string | null;
    ongoing: boolean;
    endedTimestamp: number | null;
    endedAt: Date | null;
    constructor(data: Record<string, any>);
    toString(): string | null;
    isRaw(): this is RequestData;
}
export default RecentGame;
//# sourceMappingURL=RecentGame.d.ts.map