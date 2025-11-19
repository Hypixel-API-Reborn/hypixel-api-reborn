import Quest from './Quest.js';

class GameQuests {
  game: string;
  quests: Quest[];
  constructor(name: string, data: Record<string, any>[]) {
    this.game = name;
    this.quests = data.map((quest: Record<string, any>) => new Quest(quest));
  }
}

export default GameQuests;
