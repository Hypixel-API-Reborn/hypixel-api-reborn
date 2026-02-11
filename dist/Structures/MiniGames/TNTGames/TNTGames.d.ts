import BowSpleef from './BowSpleef.js';
import PVPRun from './PVPRun.js';
import TNTRun from './TNTRun.js';
import TNTTag from './TNTTag.js';
import TNTWizards from './TNTWizards.js';
declare class TNTGames {
    coins: number;
    winStreak: number;
    wins: number;
    tntrun: TNTRun;
    pvpRun: PVPRun;
    bowSpleef: BowSpleef;
    tnttag: TNTTag;
    wizards: TNTWizards;
    constructor(data: Record<string, any>);
}
export default TNTGames;
//# sourceMappingURL=TNTGames.d.ts.map