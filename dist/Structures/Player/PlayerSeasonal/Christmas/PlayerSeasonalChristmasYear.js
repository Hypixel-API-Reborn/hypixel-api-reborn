import PlayerSeasonalChristmasYearAdventRewards from './PlayerSeasonalChristmasYearAdventRewards.js';
import PlayerSeasonalChristmasYearLeveling from './PlayerSeasonalChristmasYearLeveling.js';
class PlayerSeasonalChristmasYear {
    year;
    adventRewards;
    presents;
    leveling;
    constructor(data, year) {
        this.year = year;
        this.adventRewards = new PlayerSeasonalChristmasYearAdventRewards(data?.adventRewards || {});
        this.presents = data?.presents || {};
        this.leveling = new PlayerSeasonalChristmasYearLeveling(data?.leveling || {});
    }
}
export default PlayerSeasonalChristmasYear;
//# sourceMappingURL=PlayerSeasonalChristmasYear.js.map