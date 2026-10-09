import BowSpleef from './BowSpleef.ts';
import PVPRun from './PVPRun.ts';
import TNTRun from './TNTRun.ts';
import TNTTag from './TNTTag.ts';
import TNTWizards from './TNTWizards.ts';

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
    this.coins = data?.coins ?? data?.tokens ?? 0;
    this.winStreak = data?.winstreak ?? 0;
    this.wins = data?.wins ?? 0;
    this.tntrun = new TNTRun(data);
    this.pvpRun = new PVPRun(data);
    this.bowSpleef = new BowSpleef(data);
    this.tnttag = new TNTTag(data);
    this.wizards = new TNTWizards(data);
  }
}

export default TNTGames;
