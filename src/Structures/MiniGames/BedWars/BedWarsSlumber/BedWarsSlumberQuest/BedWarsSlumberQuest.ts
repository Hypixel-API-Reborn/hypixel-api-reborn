import BedWarsSlumberQuestGamblerGeorge from './BedWarsSlumberQuestGamblerGeorge.ts';
import BedWarsSlumberQuestItem from './BedWarsSlumberQuestItem.ts';
import BedWarsSlumberQuestNPC from './BedWarsSlumberQuestNPC.ts';
import BedWarsSlumberQuestObjective from './BedWarsSlumberQuestObjective.ts';

class BedWarsSlumberQuest {
  gamblerGeorge: BedWarsSlumberQuestGamblerGeorge;
  item: BedWarsSlumberQuestItem;
  npc: BedWarsSlumberQuestNPC;
  objective: BedWarsSlumberQuestObjective;
  lastTraded: number;
  constructor(data: Record<string, any>) {
    this.gamblerGeorge = new BedWarsSlumberQuestGamblerGeorge(data?.gambler_george ?? {});
    this.item = new BedWarsSlumberQuestItem(data?.item ?? {});
    this.npc = new BedWarsSlumberQuestNPC(data);
    this.objective = new BedWarsSlumberQuestObjective(data?.objective ?? {});
    this.lastTraded = data?.lastTraded ?? 0;
  }
}

export default BedWarsSlumberQuest;
