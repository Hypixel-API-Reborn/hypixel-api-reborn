import BedWarsSlumberQuestGamblerGeorge from './BedWarsSlumberQuestGamblerGeorge.js';
import BedWarsSlumberQuestItem from './BedWarsSlumberQuestItem.js';
import BedWarsSlumberQuestNPC from './BedWarsSlumberQuestNPC.js';
import BedWarsSlumberQuestNPCSBoolean from './BedWarsSlumberQuestNPCSBoolean.js';
import BedWarsSlumberQuestNPCSNumber from './BedWarsSlumberQuestNPCSNumber.js';
import BedWarsSlumberQuestObjective from './BedWarsSlumberQuestObjective.js';

class BedWarsSlumberQuest {
  completed: BedWarsSlumberQuestNPCSBoolean;
  gamblerGeorge: BedWarsSlumberQuestGamblerGeorge;
  item: BedWarsSlumberQuestItem;
  lastCompleted: BedWarsSlumberQuestNPCSNumber;
  lastStarted: BedWarsSlumberQuestNPCSNumber;
  npc: BedWarsSlumberQuestNPC;
  objective: BedWarsSlumberQuestObjective;
  started: BedWarsSlumberQuestNPCSBoolean;
  constructor(data: Record<string, any>) {
    this.completed = new BedWarsSlumberQuestNPCSBoolean(data?.completed || {});
    this.gamblerGeorge = new BedWarsSlumberQuestGamblerGeorge(data?.gambler_george || {});
    this.item = new BedWarsSlumberQuestItem(data?.item || {});
    this.lastCompleted = new BedWarsSlumberQuestNPCSNumber(data?.lastCompleted || {});
    this.lastStarted = new BedWarsSlumberQuestNPCSNumber(data?.lastStarted || {});
    this.npc = new BedWarsSlumberQuestNPC(data?.npc || {});
    this.objective = new BedWarsSlumberQuestObjective(data?.objective || {});
    this.started = new BedWarsSlumberQuestNPCSBoolean(data?.started || {});
  }
}

export default BedWarsSlumberQuest;
