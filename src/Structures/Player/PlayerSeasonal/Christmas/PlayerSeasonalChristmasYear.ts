import PlayerSeasonalChristmasYearAdventRewards from './PlayerSeasonalChristmasYearAdventRewards.js';
import PlayerSeasonalChristmasYearLeveling from './PlayerSeasonalChristmasYearLeveling.js';

class PlayerSeasonalChristmasYear {
  year: number;
  adventRewards: PlayerSeasonalChristmasYearAdventRewards;
  presents: Record<string, boolean>;
  leveling: PlayerSeasonalChristmasYearLeveling;
  constructor(data: Record<string, any>, year: number) {
    this.year = year;
    this.adventRewards = new PlayerSeasonalChristmasYearAdventRewards(data?.adventRewards || {});
    this.presents = data?.presents || {};
    this.leveling = new PlayerSeasonalChristmasYearLeveling(data?.leveling || {});
  }
}

export default PlayerSeasonalChristmasYear;
