import GameChallenges from './GameChallenges.js';
import type RequestData from '../../Private/RequestData.ts';

class Challenges {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  challengesPerGame: Record<string, GameChallenges>;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.challengesPerGame = {};
    Object.keys(data?.challenges || {}).forEach((game) => {
      this.challengesPerGame[game] = new GameChallenges(game, data.challenges[game]);
    });
  }

  isRaw(): this is RequestData {
    return false;
  }
}

export default Challenges;
