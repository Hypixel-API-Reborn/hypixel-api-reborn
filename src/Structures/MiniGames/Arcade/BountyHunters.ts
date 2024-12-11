import Divide from '../../../Utils/Divide.js';

class BountyHunters {
  wins: number;
  kills: number;
  deaths: number;
  KDR: number;
  bountyKills: number;
  bowKills: number;
  swordKills: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_oneinthequiver || 0;
    this.kills = data?.kills_oneinthequiver || 0;
    this.deaths = data?.deaths_oneinthequiver || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.bountyKills = data?.bounty_kills_oneinthequiver || 0;
    this.bowKills = data?.bow_kills_oneinthequiver || 0;
    this.swordKills = data?.sword_kills_oneinthequiver || 0;
  }
}

export default BountyHunters;
