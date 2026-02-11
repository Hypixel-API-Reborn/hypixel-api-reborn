import BedWarsSLumberSandman from './BedWarsSlumberSandman.js';
import BedWarsSlumberMinion from './BedWarsSlumberMinion.js';
import BedWarsSlumberPhase from './BedWarsSlumberPhase.js';
import BedWarsSlumberPhaseThree from './BedWarsSlumberPhaseThree.js';
import BedWarsSlumberQuest from './BedWarsSlumberQuest/BedWarsSlumberQuest.js';
import BedWarsSlumberRoom from './BedWarsSlumberRoom.js';
import type { BedWarsSlumberBag, ShopSort } from '../../../../Types/Player.js';
declare class BedWarsSlumber {
    bagType: BedWarsSlumberBag | 'UNKNOWN';
    boonMultiplier: number;
    currentCosmeticSorting: ShopSort | 'UNKNOWN';
    doublers: number;
    minion: BedWarsSlumberMinion;
    phase: BedWarsSlumberPhase;
    phasethree: BedWarsSlumberPhaseThree;
    quest: BedWarsSlumberQuest;
    rooms: BedWarsSlumberRoom;
    sandman: BedWarsSLumberSandman;
    tickets: number;
    ticketsGivenToDoorman: number;
    ticketsRequirementMet: boolean;
    totalTicketsEarned: number;
    walletFullWarning: boolean;
    constructor(data: Record<string, any>);
}
export default BedWarsSlumber;
//# sourceMappingURL=BedWarsSlumber.d.ts.map