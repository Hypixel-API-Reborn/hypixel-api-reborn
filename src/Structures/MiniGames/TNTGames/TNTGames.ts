import BowSpleef from './BowSpleef.js';
import PVPRun from './PVPRun.js';
import TNTRun from './TNTRun.js';
import TNTTag from './TNTTag.js';
import TNTWizards from './TNTWizards.js';

class TNTGames {
  coins: number;
  winStreak: number;
  wins: number;
  tntrun: TNTRun;
  pvpRun: PVPRun;
  bowSpleef: BowSpleef;
  tnttag: TNTTag;
  wizards: TNTWizards;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || data?.tokens || 0;
    this.winStreak = data?.winstreak || 0;
    this.wins = data?.wins || 0;
    this.tntrun = new TNTRun(data);
    this.pvpRun = new PVPRun(data);
    this.bowSpleef = new BowSpleef(data);
    this.tnttag = new TNTTag(data);
    this.wizards = new TNTWizards(data);
  }
}

export default TNTGames;
