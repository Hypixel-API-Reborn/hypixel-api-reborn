import Divide from '../../../Utils/Divide.js';
import DuelsGamemode from './DuelsGamemode.js';
import { getTitle } from './Duels.js';

class DuelsBridge {
  title: string;
  winStreak: number;
  bestWinStreak: number;
  solo: DuelsGamemode;
  doubles: DuelsGamemode;
  threes: DuelsGamemode;
  fours: DuelsGamemode;
  '2v2v2v2': DuelsGamemode;
  '3v3v3v3': DuelsGamemode;
  ctf: DuelsGamemode;
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
    this.title = getTitle(data, 'bridge');
    this.winStreak = data?.current_bridge_winstreak || 0;
    this.bestWinStreak = data?.best_bridge_winstreak || 0;
    this.solo = new DuelsGamemode(data, 'bridge_duel', this.title);
    this.doubles = new DuelsGamemode(data, 'bridge_doubles', this.title);
    this.threes = new DuelsGamemode(data, 'bridge_threes', this.title);
    this.fours = new DuelsGamemode(data, 'bridge_fours', this.title);
    this['2v2v2v2'] = new DuelsGamemode(data, '2v2v2v2', this.title);
    this['3v3v3v3'] = new DuelsGamemode(data, '3v3v3v3', this.title);
    this.ctf = new DuelsGamemode(data, 'capture_threes', this.title);
    this.kills =
      this.solo.kills +
      this.doubles.kills +
      this.threes.kills +
      this.fours.kills +
      this['2v2v2v2'].kills +
      this['3v3v3v3'].kills +
      this.ctf.kills;
    this.deaths =
      this.solo.deaths +
      this.doubles.deaths +
      this.threes.deaths +
      this.fours.deaths +
      this['2v2v2v2'].deaths +
      this['3v3v3v3'].deaths +
      this.ctf.deaths;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins =
      this.solo.wins +
      this.doubles.wins +
      this.threes.wins +
      this.fours.wins +
      this['2v2v2v2'].wins +
      this['3v3v3v3'].wins +
      this.ctf.wins;
    this.losses =
      this.solo.losses +
      this.doubles.losses +
      this.threes.losses +
      this.fours.losses +
      this['2v2v2v2'].losses +
      this['3v3v3v3'].losses +
      this.ctf.losses;
    this.WLR = Divide(this.wins, this.losses);
    this.playedGames =
      this.solo.playedGames +
      this.doubles.playedGames +
      this.threes.playedGames +
      this.fours.playedGames +
      this['2v2v2v2'].playedGames +
      this['3v3v3v3'].playedGames +
      this.ctf.playedGames;
    this.swings =
      this.solo.swings +
      this.doubles.swings +
      this.threes.swings +
      this.fours.swings +
      this['2v2v2v2'].swings +
      this['3v3v3v3'].swings +
      this.ctf.swings;
    this.hits =
      this.solo.hits +
      this.doubles.hits +
      this.threes.hits +
      this.fours.hits +
      this['2v2v2v2'].hits +
      this['3v3v3v3'].hits +
      this.ctf.hits;
    this.meleeAccuracy = Divide(this.hits, this.swings);
    this.bowShots =
      this.solo.bowShots +
      this.doubles.bowShots +
      this.threes?.bowShots +
      this.fours?.bowShots +
      this['2v2v2v2'].bowShots +
      this['3v3v3v3'].bowShots +
      this.ctf.bowShots;
    this.bowHits =
      this.solo.bowHits +
      this.doubles.bowHits +
      this.threes.bowHits +
      this.fours.bowHits +
      this['2v2v2v2'].bowHits +
      this['3v3v3v3'].bowHits +
      this.ctf.bowHits;
    this.bowAccuracy = Divide(this.bowHits, this.bowShots);
    this.blocksPlaced =
      this.solo.blocksPlaced +
      this.doubles.blocksPlaced +
      this.threes.blocksPlaced +
      this.fours.blocksPlaced +
      this['2v2v2v2'].blocksPlaced +
      this['3v3v3v3'].blocksPlaced +
      this.ctf.blocksPlaced;
    this.healthRegenerated =
      this.solo.healthRegenerated +
      this.doubles.healthRegenerated +
      this.threes.healthRegenerated +
      this.fours.healthRegenerated +
      this['2v2v2v2'].healthRegenerated +
      this['3v3v3v3'].healthRegenerated +
      this.ctf.healthRegenerated;
    this.goldenApplesEatan =
      this.solo.goldenApplesEatan +
      this.doubles.goldenApplesEatan +
      this.threes.goldenApplesEatan +
      this.fours.goldenApplesEatan +
      this['2v2v2v2'].goldenApplesEatan +
      this['3v3v3v3'].goldenApplesEatan +
      this.ctf.goldenApplesEatan;
  }
}

export default DuelsBridge;
