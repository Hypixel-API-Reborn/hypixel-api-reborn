import GameQuests from './GameQuests.js';
import type RequestData from '../../Private/RequestData.js';

class Quests {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  questsPerGame: Record<string, GameQuests>;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.questsPerGame = {};
    Object.keys(data.quests || {}).forEach((game) => {
      this.questsPerGame[game] = new GameQuests(game, data.quests[game]);
    });
  }

  isRaw(): this is RequestData {
    return false;
  }
}

export default Quests;
