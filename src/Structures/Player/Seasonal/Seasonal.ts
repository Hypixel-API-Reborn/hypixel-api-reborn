import Season from './Season.js';

class Seasonal {
  silver: number;
  anniversary: Season;
  christmas: Season;
  easter: Season;
  halloween: Season;
  summer: Season;
  constructor(data: Record<string, any>) {
    this.silver = data.silver || 0;
    this.anniversary = new Season(data?.anniversary || {}, 'anniversary');
    this.christmas = new Season(data?.christmas || {}, 'christmas');
    this.easter = new Season(data?.easter || {}, 'easter');
    this.halloween = new Season(data?.halloween || {}, 'halloween');
    this.summer = new Season(data?.summer || {}, 'summer');
  }
}

export default Seasonal;
