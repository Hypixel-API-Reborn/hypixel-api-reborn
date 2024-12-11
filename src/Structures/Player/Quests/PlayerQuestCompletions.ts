import PlayerQuestCompletion from './PlayerQuestCompletion.js';

class PlayerQuestCompletions {
  amount: number;
  completions: PlayerQuestCompletion[];
  constructor(data: Record<string, number>[]) {
    this.amount = data.length || 0;
    this.completions = [];
    data.forEach((completion: Record<string, number>) => {
      this.completions.push(new PlayerQuestCompletion(completion));
    });
  }
}

export default PlayerQuestCompletions;
