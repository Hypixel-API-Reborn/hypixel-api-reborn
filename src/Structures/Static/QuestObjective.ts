import type { QuestObjectiveType } from '../../Types/index.js';

class QuestObjective {
  id: string;
  type: QuestObjectiveType;
  amountNeeded: number;
  constructor(objective: Record<string, any>) {
    this.id = objective.id ?? 'UNKNOWN';
    this.type = objective.type === 'IntegerObjective' ? 'Integer' : 'Boolean';
    this.amountNeeded = parseInt(objective.integer ?? '1', 10);
  }
}

export default QuestObjective;
