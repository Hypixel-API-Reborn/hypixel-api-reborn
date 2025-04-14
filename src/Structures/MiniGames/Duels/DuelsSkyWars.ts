import Divide from '../../../Utils/Divide.js';
import DuelsGamemode from './DuelsGamemode.js';
import { getTitle } from './Duels.js';

class DuelsSkyWars {
  title: string;
  winStreak: number;
  bestWinStreak: number;
  solo: DuelsGamemode;
  doubles: DuelsGamemode;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  swings: number;
  hits: number;
  meleeAccuracy: number;
  bowShots: number;
  bowHits: number;
  bowAccuracy: number;
  blocksPlaced: number;
  healthRegenerated: number;
  goldenApplesEatan: number;
  constructor(data: Record<string, any>) {
    this.title = getTitle(data, 'sw');
    this.winStreak = data?.current_sw_winstreak || 0;
    this.bestWinStreak = data?.best_sw_winstreak || 0;
    this.solo = new DuelsGamemode(data, 'sw_duel', this.title);
    this.doubles = new DuelsGamemode(data, 'sw_doubles', this.title);
    this.kills = this.solo.kills + this.doubles.kills;
    this.deaths = this.solo.deaths + this.doubles.deaths;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = this.solo.wins + this.doubles.wins;
    this.losses = this.solo.losses + this.doubles.losses;
    this.WLR = Divide(this.wins, this.losses);
    this.playedGames = this.solo.playedGames + this.doubles.playedGames;
    this.swings = this.solo.swings + this.doubles.swings;
    this.hits = this.solo.hits + this.doubles.hits;
    this.meleeAccuracy = Divide(this.hits, this.swings);
    this.bowShots = this.solo.bowShots + this.doubles.bowShots;
    this.bowHits = this.solo.bowHits + this.doubles.bowHits;
    this.bowAccuracy = Divide(this.bowHits, this.bowShots);
    this.blocksPlaced = this.solo.blocksPlaced + this.doubles.blocksPlaced;
    this.healthRegenerated = this.solo.healthRegenerated + this.doubles.healthRegenerated;
    this.goldenApplesEatan = this.solo.goldenApplesEatan + this.doubles.goldenApplesEatan;
  }
}

export default DuelsSkyWars;
