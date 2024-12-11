import Divide from '../../../Utils/Divide.js';

class ThrowOut {
  wins: number;
  kills: number;
  deaths: number;
  KDR: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_throw_out || 0;
    this.kills = data?.kills_throw_out || 0;
    this.deaths = data?.deaths_throw_out || 0;
    this.KDR = Divide(this.kills, this.deaths);
  }
}

export default ThrowOut;
