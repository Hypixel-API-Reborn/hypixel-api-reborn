import OneTimeAchivement from './OneTimeAchivement.js';
import TieredAchivement from './TieredAchivement.js';

class GuildAchievements {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  oneTimeAchievements: OneTimeAchivement[];
  tieredAchievements: TieredAchivement[];
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data.lastUpdated;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.oneTimeAchievements = Object.keys(data.one_time).map(
      (achivementKey) => new OneTimeAchivement(achivementKey, data.one_time[achivementKey])
    );
    this.tieredAchievements = Object.keys(data.tiered).map(
      (achivementKey) => new TieredAchivement(achivementKey, data.tiered[achivementKey])
    );
  }
}

export default GuildAchievements;
