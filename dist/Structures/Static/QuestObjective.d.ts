import type { QuestObjectiveType } from '../../Types/Static.js';
declare class QuestObjective {
    id: string;
    type: QuestObjectiveType;
    amountNeeded: number;
    constructor(objective: Record<string, any>);
}
export default QuestObjective;
//# sourceMappingURL=QuestObjective.d.ts.map