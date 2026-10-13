import type { BedWarsSlumberNPCName } from '../../../../../Types/index.ts';

class BedWarsSlumberQuestNPCData {
  started: boolean;
  lastStarted: number;
  completed: boolean;
  lastCompleted: number;
  constructor(data: Record<string, any>, npcName: BedWarsSlumberNPCName) {
    this.started = data?.started?.[npcName] ?? false;
    this.lastStarted = data?.lastStarted?.[npcName] ?? 0;
    this.completed = data?.completed?.[npcName] ?? false;
    this.lastCompleted = data?.lastCompleted?.[npcName] ?? 0;
  }
}

export default BedWarsSlumberQuestNPCData;
