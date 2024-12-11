import QuestObjective from './QuestObjective.js';
import type { QuestReward, QuestType } from '../../Types/Static.js';

class Quest {
  id: string;
  name: string;
  description: string;
  rewards: QuestReward[];
  type: QuestType;
  objectives: QuestObjective[];
  constructor(data: Record<string, any>) {
    this.id = (data?.id || '').trim();
    this.name = (data?.name || '').trim();
    this.description = (data?.description || '').trim();
    this.rewards = data.rewards || [];
    this.type = 'DailyResetQuestRequirement' === data.requirements?.[0].type ? 'Daily' : 'Weekly';
    this.objectives = (data?.objectives || []).map((objective: any) => new QuestObjective(objective));
  }

  toString(): string {
    return this.name;
  }
}

export default Quest;
