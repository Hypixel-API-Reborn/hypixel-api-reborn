import PlayerQuest from './PlayerQuest.js';

class PlayerQuests {
  quests: PlayerQuest[];
  autoActivate: boolean;
  constructor(data: Record<string, any>, autoActivate: boolean) {
    this.quests = Object.keys(data).map((quest) => new PlayerQuest(data[quest], quest));
    this.autoActivate = autoActivate;
  }
}

export default PlayerQuests;
