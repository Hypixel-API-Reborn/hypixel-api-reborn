import GameChallenges from './GameChallenges.js';

class Challenges {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  challengesPerGame: Record<string, GameChallenges>;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data.lastUpdated;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.challengesPerGame = {};
    Object.keys(data.challenges).forEach((game) => {
      this.challengesPerGame[game] = new GameChallenges(game, data.challenges[game]);
    });
  }
}

export default Challenges;
