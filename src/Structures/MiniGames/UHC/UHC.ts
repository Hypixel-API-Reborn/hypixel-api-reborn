import Divide from '../../../Utils/Divide.js';
import UHCGamemode from './UHCGamemode.js';
import type { UHCKits } from '../../../Types/Player.js';

function getStarLevel(kills: number, wins: number): number {
  const sum = kills + wins * 10;
  let starLevel = 1;
  const sums = [0, 1, 6, 21, 46, 96, 171, 271, 521, 1021, 1321, 1621, 1921, 2221, 2521, Infinity];
  starLevel += sums.map((x) => x * 10 - sum).findIndex((x) => x > 0) - 1;
  return starLevel;
}

class UHC {
  coins: number;
  score: number;
  kit: UHCKits | 'None';
  solo: UHCGamemode;
  team: UHCGamemode;
  redVsBlue: UHCGamemode;
  noDiamond: UHCGamemode;
  brawl: UHCGamemode;
  soloBrawl: UHCGamemode;
  duoBrawl: UHCGamemode;
  wins: number;
  kills: number;
  deaths: number;
  KDR: number;
  headsEaten: number;
  ultimatesCrafted: number;
  extraUltimatesCrafted: number;
  starLevel: number;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || data?.tokens || 0;
    this.score = data?.score || 0;
    this.kit = data?.equippedKit || 'None';
    this.solo = new UHCGamemode(data, 'solo');
    this.team = new UHCGamemode(data);
    this.redVsBlue = new UHCGamemode(data, 'red_vs_blue');
    this.noDiamond = new UHCGamemode(data, 'no_diamonds');
    this.brawl = new UHCGamemode(data, 'brawl');
    this.soloBrawl = new UHCGamemode(data, 'solo_brawl');
    this.duoBrawl = new UHCGamemode(data, 'duo_brawl');
    this.wins =
      this.solo.wins +
      this.team.wins +
      this.redVsBlue.wins +
      this.noDiamond.wins +
      this.brawl.wins +
      this.soloBrawl.wins +
      this.duoBrawl.wins;
    this.kills =
      this.solo.kills +
      this.team.kills +
      this.redVsBlue.kills +
      this.noDiamond.kills +
      this.brawl.kills +
      this.soloBrawl.kills +
      this.duoBrawl.kills;
    this.deaths =
      this.solo.deaths +
      this.team.deaths +
      this.redVsBlue.deaths +
      this.noDiamond.deaths +
      this.brawl.deaths +
      this.soloBrawl.deaths +
      this.duoBrawl.deaths;
    this.KDR = Divide(this.kills, this.deaths);
    this.headsEaten =
      this.solo.headsEaten +
      this.team.headsEaten +
      this.redVsBlue.headsEaten +
      this.noDiamond.headsEaten +
      this.brawl.headsEaten +
      this.soloBrawl.headsEaten +
      this.duoBrawl.headsEaten;
    this.ultimatesCrafted =
      this.solo.ultimatesCrafted +
      this.team.ultimatesCrafted +
      this.redVsBlue.ultimatesCrafted +
      this.noDiamond.ultimatesCrafted +
      this.brawl.ultimatesCrafted +
      this.soloBrawl.ultimatesCrafted +
      this.duoBrawl.ultimatesCrafted;
    this.extraUltimatesCrafted =
      this.solo.extraUltimatesCrafted +
      this.team.extraUltimatesCrafted +
      this.redVsBlue.extraUltimatesCrafted +
      this.noDiamond.extraUltimatesCrafted +
      this.brawl.extraUltimatesCrafted +
      this.soloBrawl.extraUltimatesCrafted +
      this.duoBrawl.extraUltimatesCrafted;
    this.starLevel = getStarLevel(this.kills, this.wins);
  }
}

export default UHC;
