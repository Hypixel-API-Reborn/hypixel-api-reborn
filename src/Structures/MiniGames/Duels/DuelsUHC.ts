import Divide from '../../../Utils/Divide.js';
import DuelsGamemode from './DuelsGamemode.js';
import { getTitle } from './Duels.js';

class DuelsUHC {
  title: string;
  winstreak: number;
  bestWinstreak: number;
  solo: DuelsGamemode;
  doubles: DuelsGamemode;
  fours: DuelsGamemode;
  deathmatch: DuelsGamemode;
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
    this.title = getTitle(data, 'uhc');
    this.winstreak = data?.current_uhc_winstreak || 0;
    this.bestWinstreak = data?.best_uhc_winstreak || 0;
    this.solo = new DuelsGamemode(data, 'uhc_duel', this.title);
    this.doubles = new DuelsGamemode(data, 'uhc_doubles', this.title);
    this.fours = new DuelsGamemode(data, 'uhc_four', this.title);
    this.deathmatch = new DuelsGamemode(data, 'uhc_meetup', this.title);
    this.kills = this.solo.kills + this.doubles.kills + this.fours.kills + this.deathmatch.kills;
    this.deaths = this.solo.deaths + this.doubles.deaths + this.fours.deaths + this.deathmatch.deaths;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = this.solo.wins + this.doubles.wins + this.fours.wins + this.deathmatch.wins;
    this.losses = this.solo.losses + this.doubles.losses + this.fours.losses + this.deathmatch.losses;
    this.WLR = Divide(this.wins, this.losses);
    this.playedGames =
      this.solo.playedGames + this.doubles.playedGames + this.fours.playedGames + this.deathmatch.playedGames;
    this.swings = this.solo.swings + this.doubles.swings + this.fours.swings + this.deathmatch.swings;
    this.hits = this.solo.hits + this.doubles.hits + this.fours.hits + this.deathmatch.hits;
    this.meleeAccuracy = Divide(this.hits, this.swings);
    this.bowShots = this.solo.bowShots + this.doubles.bowShots + this.fours.bowShots + this.deathmatch.bowShots;
    this.bowHits = this.solo.bowHits + this.doubles.bowHits + this.fours.bowHits + this.deathmatch.bowHits;
    this.bowAccuracy = Divide(this.bowHits, this.bowShots);
    this.blocksPlaced =
      this.solo.blocksPlaced + this.doubles.blocksPlaced + this.fours.blocksPlaced + this.deathmatch.blocksPlaced;
    this.healthRegenerated =
      this.solo.healthRegenerated +
      this.doubles.healthRegenerated +
      this.fours.healthRegenerated +
      this.deathmatch.healthRegenerated;
    this.goldenApplesEatan =
      this.solo.goldenApplesEatan +
      this.doubles.goldenApplesEatan +
      this.fours.goldenApplesEatan +
      this.deathmatch.goldenApplesEatan;
  }
}

export default DuelsUHC;
