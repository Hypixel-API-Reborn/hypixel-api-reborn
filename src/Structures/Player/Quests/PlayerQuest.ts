import PlayerQuestCompletions from './PlayerQuestCompletions.js';

class PlayerQuest {
  name: string;
  completions: PlayerQuestCompletions;
  constructor(data: Record<string, any>, name: string) {
    this.name = name;
    this.completions = new PlayerQuestCompletions(data?.completions || []);
  }
}

export default PlayerQuest;
