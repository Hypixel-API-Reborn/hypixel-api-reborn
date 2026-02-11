import BedWarsSlumberQuestGamblerGeorge from './BedWarsSlumberQuestGamblerGeorge.js';
import BedWarsSlumberQuestItem from './BedWarsSlumberQuestItem.js';
import BedWarsSlumberQuestNPC from './BedWarsSlumberQuestNPC.js';
import BedWarsSlumberQuestNPCSBoolean from './BedWarsSlumberQuestNPCSBoolean.js';
import BedWarsSlumberQuestNPCSNumber from './BedWarsSlumberQuestNPCSNumber.js';
import BedWarsSlumberQuestObjective from './BedWarsSlumberQuestObjective.js';
declare class BedWarsSlumberQuest {
    completed: BedWarsSlumberQuestNPCSBoolean;
    gamblerGeorge: BedWarsSlumberQuestGamblerGeorge;
    item: BedWarsSlumberQuestItem;
    lastCompleted: BedWarsSlumberQuestNPCSNumber;
    lastStarted: BedWarsSlumberQuestNPCSNumber;
    npc: BedWarsSlumberQuestNPC;
    objective: BedWarsSlumberQuestObjective;
    started: BedWarsSlumberQuestNPCSBoolean;
    constructor(data: Record<string, any>);
}
export default BedWarsSlumberQuest;
//# sourceMappingURL=BedWarsSlumberQuest.d.ts.map