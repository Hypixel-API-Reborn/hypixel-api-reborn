import GameAchievements from './GameAchievements.js';

class Achievements {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  achievementsPerGame: Record<string, GameAchievements>;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data.lastUpdated;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.achievementsPerGame = {};
    Object.keys(data.achievements).forEach((game) => {
      this.achievementsPerGame.game = new GameAchievements(game, data.achievements[game]);
    });
  }
}

export default Achievements;
