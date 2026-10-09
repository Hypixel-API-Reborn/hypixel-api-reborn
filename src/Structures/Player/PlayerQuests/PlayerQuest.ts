import PlayerQuestCompletions from './PlayerQuestCompletions.ts';

class PlayerQuest {
  name: string;
  completions: PlayerQuestCompletions;
  constructor(data: Record<string, any>, name: string) {
    this.name = name;
    this.completions = new PlayerQuestCompletions(data?.completions ?? []);
  }
}

export default PlayerQuest;
