import type { ColorString } from '../../../Types/Color.js';

class BowSpleef {
  wins: number;
  tags: number;
  deaths: number;
  prefixColor: ColorString | 'Rainbow';
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_bowspleef || 0;
    this.tags = data?.tags_bowspleef || 0;
    this.deaths = data?.deaths_bowspleef || 0;
    this.prefixColor = data?.prefix_bowspleef || '';
  }
}

export default BowSpleef;
