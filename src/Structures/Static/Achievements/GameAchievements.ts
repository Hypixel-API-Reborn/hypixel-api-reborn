import OneTimeAchivement from './OneTimeAchivement.js';
import TieredAchivement from './TieredAchivement.js';

class GameAchievements {
  game: string;
  points: number;
  legacyPoints: number;
  oneTimeAchievements: OneTimeAchivement[];
  tieredAchievements: TieredAchivement[];
  constructor(game: string, data: Record<string, any>) {
    this.game = game;
    this.points = data.total_points || 0;
    this.legacyPoints = data.total_legacy_points || 0;
    this.oneTimeAchievements = Object.keys(data.one_time).map(
      (achivementKey) => new OneTimeAchivement(achivementKey, data.one_time[achivementKey])
    );
    this.tieredAchievements = Object.keys(data.tiered).map(
      (achivementKey) => new TieredAchivement(achivementKey, data.tiered[achivementKey])
    );
  }
}

export default GameAchievements;
