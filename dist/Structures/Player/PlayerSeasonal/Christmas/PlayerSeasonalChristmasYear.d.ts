import PlayerSeasonalChristmasYearAdventRewards from './PlayerSeasonalChristmasYearAdventRewards.js';
import PlayerSeasonalChristmasYearLeveling from './PlayerSeasonalChristmasYearLeveling.js';
declare class PlayerSeasonalChristmasYear {
    year: number;
    adventRewards: PlayerSeasonalChristmasYearAdventRewards;
    presents: Record<string, boolean>;
    leveling: PlayerSeasonalChristmasYearLeveling;
    constructor(data: Record<string, any>, year: number);
}
export default PlayerSeasonalChristmasYear;
//# sourceMappingURL=PlayerSeasonalChristmasYear.d.ts.map