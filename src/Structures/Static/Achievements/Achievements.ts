import GameAchievements from './GameAchievements.js';
import type RequestData from '../../../Private/RequestData.ts';

class Achievements {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  achievementsPerGame: Record<string, GameAchievements>;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.achievementsPerGame = {};
    Object.keys(data.achievements || {}).forEach((game) => {
      this.achievementsPerGame.game = new GameAchievements(game, data.achievements[game]);
    });
  }

  isRaw(): this is RequestData {
    return false;
  }
}

export default Achievements;
