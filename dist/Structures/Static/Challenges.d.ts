import GameChallenges from './GameChallenges.js';
import type RequestData from '../../Private/RequestData.js';
declare class Challenges {
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date;
    challengesPerGame: Record<string, GameChallenges>;
    constructor(data: Record<string, any>);
    isRaw(): this is RequestData;
}
export default Challenges;
//# sourceMappingURL=Challenges.d.ts.map