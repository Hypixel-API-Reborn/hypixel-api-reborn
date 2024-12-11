import type { QuestObjectiveType } from '../../Types/Static.js';

class QuestObjective {
  id: string;
  type: QuestObjectiveType;
  amountNeeded: number;
  constructor(objective: Record<string, any>) {
    this.id = objective.id;
    this.type = 'IntegerObjective' === objective.type ? 'Integer' : 'Boolean';
    this.amountNeeded = parseInt(objective.integer || '1', 10);
  }
}

export default QuestObjective;
