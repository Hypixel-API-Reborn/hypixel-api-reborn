import GameQuests from './GameQuests.js';
import type RequestData from '../../Private/RequestData.js';
declare class Quests {
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date;
    questsPerGame: Record<string, GameQuests>;
    constructor(data: Record<string, any>);
    isRaw(): this is RequestData;
}
export default Quests;
//# sourceMappingURL=Quests.d.ts.map