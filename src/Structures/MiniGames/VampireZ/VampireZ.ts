import Divide from '../../../Utils/Divide.js';
import VampireZRole from './VampireZRole.js';

class VampireZ {
  coins: number;
  goldBought: number;
  blood: boolean;
  zombieKills: number;
  human: VampireZRole;
  vampire: VampireZRole;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || data?.tokens || 0;
    this.goldBought = data?.gold_bought || 0;
    this.blood = data?.blood || false;
    this.zombieKills = data?.zombie_kills || 0;
    this.human = new VampireZRole(data, 'human');
    this.vampire = new VampireZRole(data, 'vampire');
    this.kills = this.human?.kills + this.vampire?.kills;
    this.deaths = this.human?.deaths + this.vampire?.deaths;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = this.human?.wins + this.vampire?.wins;
  }
}

export default VampireZ;
