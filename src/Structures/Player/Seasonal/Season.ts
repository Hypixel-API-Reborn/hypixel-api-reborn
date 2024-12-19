import SeasonYear from './SeasonYear.js';
import type { SeasonName } from '../../../Types/Player.js';

class Season {
  season: SeasonName;
  years: SeasonYear[];
  constructor(data: Record<string, any>, season: SeasonName) {
    this.season = season;
    this.years = [];
    Object.keys(data).forEach((key) => this.years.push(new SeasonYear(data?.[key], key)));
  }
}

export default Season;
