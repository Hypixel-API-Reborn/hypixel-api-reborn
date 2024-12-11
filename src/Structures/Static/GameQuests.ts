import Quest from './Quest.js';

class GameQuests {
  game: string;
  quests: Quest[];
  constructor(name: string, data: Record<string, any>) {
    this.game = name;
    this.quests = data.map((x: any) => new Quest(x));
  }
}

export default GameQuests;
