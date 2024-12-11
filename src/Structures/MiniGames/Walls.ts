import Divide from '../../Utils/Divide.js';

class Walls {
  coins: number;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  assists: number;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || data?.tokens || 0;
    this.kills = data?.kills || 0;
    this.deaths = data?.deaths || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.wins || 0;
    this.losses = data?.losses || 0;
    this.WLR = Divide(this.wins, this.losses);
    this.assists = data?.assists || 0;
  }
}

export default Walls;
