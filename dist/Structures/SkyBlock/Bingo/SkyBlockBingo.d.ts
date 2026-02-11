import SkyBlockBingoGoal from './SkyBlockBingoGoal.js';
import type RequestData from '../../../Private/RequestData.js';
declare class SkyBlockBingo {
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date;
    id: number | null;
    name: string;
    start: number;
    startAt: Date;
    end: number;
    endAt: Date;
    goals: SkyBlockBingoGoal[] | null;
    constructor(data: Record<string, any>);
    toString(): number | null;
    isRaw(): this is RequestData;
}
export default SkyBlockBingo;
//# sourceMappingURL=SkyBlockBingo.d.ts.map