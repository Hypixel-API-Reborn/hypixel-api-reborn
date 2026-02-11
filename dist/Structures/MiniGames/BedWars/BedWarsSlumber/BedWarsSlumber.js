import BedWarsSLumberSandman from './BedWarsSlumberSandman.js';
import BedWarsSlumberMinion from './BedWarsSlumberMinion.js';
import BedWarsSlumberPhase from './BedWarsSlumberPhase.js';
import BedWarsSlumberPhaseThree from './BedWarsSlumberPhaseThree.js';
import BedWarsSlumberQuest from './BedWarsSlumberQuest/BedWarsSlumberQuest.js';
import BedWarsSlumberRoom from './BedWarsSlumberRoom.js';
class BedWarsSlumber {
    bagType;
    boonMultiplier;
    currentCosmeticSorting;
    doublers;
    minion;
    phase;
    phasethree;
    quest;
    rooms;
    sandman;
    tickets;
    ticketsGivenToDoorman;
    ticketsRequirementMet;
    totalTicketsEarned;
    walletFullWarning;
    constructor(data) {
        this.bagType = data?.bag_type || 'UNKNOWN';
        this.boonMultiplier = data?.boon_multiplier || 0;
        this.currentCosmeticSorting = data?.currentCosmeticSorting || 'UNKNOWN';
        this.doublers = data?.doublers || 0;
        this.minion = new BedWarsSlumberMinion(data?.minion || {});
        this.phase = new BedWarsSlumberPhase(data?.phase || {});
        this.phasethree = new BedWarsSlumberPhaseThree(data?.phasethree || {});
        this.quest = new BedWarsSlumberQuest(data?.quest || {});
        this.rooms = new BedWarsSlumberRoom(data?.room || {});
        this.sandman = new BedWarsSLumberSandman(data?.sandman || {});
        this.tickets = data?.tickets || 0;
        this.ticketsGivenToDoorman = data?.tickets_given_doorman || 0;
        this.ticketsRequirementMet = data?.tickets_requirement_met || false;
        this.totalTicketsEarned = data?.total_tickets_earned || 0;
        this.walletFullWarning = data?.wallet_full_warning || false;
    }
}
export default BedWarsSlumber;
//# sourceMappingURL=BedWarsSlumber.js.map