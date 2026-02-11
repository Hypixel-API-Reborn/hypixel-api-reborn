import QuestObjective from './QuestObjective.js';
import type { QuestReward, QuestType } from '../../Types/Static.js';
declare class Quest {
    id: string;
    name: string;
    description: string;
    rewards: QuestReward[];
    type: QuestType;
    objectives: QuestObjective[];
    constructor(data: Record<string, any>);
    toString(): string;
}
export default Quest;
//# sourceMappingURL=Quest.d.ts.map