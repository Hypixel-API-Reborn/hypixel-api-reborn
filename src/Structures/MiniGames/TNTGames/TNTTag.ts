import Divide from '../../../Utils/Divide.js';
import type { ColorString } from '../../../Types/Color.js';

class TNTTag {
  wins: number;
  kills: number;
  deaths: number;
  KDR: number;
  speed: number;
  blastProtection: number;
  speedItUp: number;
  slowItDown: number;
  prefix: ColorString | 'Rainbow';
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_tntag || 0;
    this.kills = data?.kills_tntag || 0;
    this.deaths = data?.deaths_tntag || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.speed = data?.new_tntag_speedy || 0;
    this.blastProtection = data?.tag_blastprotection || 0;
    this.speedItUp = data?.tag_speeditup || 0;
    this.slowItDown = data?.tag_slowitdown || 0;
    this.prefix = data?.prefix_tntag || '';
  }
}

export default TNTTag;
