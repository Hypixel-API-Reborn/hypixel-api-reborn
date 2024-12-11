import SeasonBingo from './SeasonBingo.js';

class SeasonYear {
  year: number;
  experience: number;
  season: Record<string, any>;
  bingo: SeasonBingo | null;
  adventRewards: Record<string, number> | null;
  presents: Record<string, boolean> | null;
  constructor(data: Record<string, any>, year: string) {
    this.year = Number(year);
    this.experience = data?.leveling?.experience || 0;
    this.season = data.season || {};
    this.bingo = data.bingo ? new SeasonBingo(data.bingo) : null;
    this.adventRewards = data.adventRewards ? data.adventRewards : null;
    this.presents = data.presents ? data.presents : null;
  }
}

export default SeasonYear;
