import OneTimeAchievement from './OneTimeAchievement.js';
import TieredAchievement from './TieredAchievement.js';
import type RequestData from '../../../Private/RequestData.ts';

class GuildAchievements {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  oneTimeAchievements: OneTimeAchievement[];
  tieredAchievements: TieredAchievement[];
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data.lastUpdated;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.oneTimeAchievements = Object.keys(data.one_time).map(
      (achievementKey) => new OneTimeAchievement(achievementKey, data.one_time[achievementKey])
    );
    this.tieredAchievements = Object.keys(data.tiered).map(
      (achievementKey) => new TieredAchievement(achievementKey, data.tiered[achievementKey])
    );
  }

  isRaw(): this is RequestData {
    return false;
  }
}

export default GuildAchievements;
