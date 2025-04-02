import SkyBlockMemberDungeonsClasses from './SkyBlockMemberDungeonsClasses.js';
import SkyBlockMemberDungeonsMode from './SkyBlockMemberDungeonsMode.js';
import SkyBlockMemberDungeonsTreasureRun from './SkyBlockMemberDungeonsTreasureRun.js';
import { getLevelByXp } from '../../../../Utils/SkyBlockUtils.js';
import type { DungeonFloor, SkillLevelData } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberDungeons {
  catacombs: SkyBlockMemberDungeonsMode;
  masterCatacombs: SkyBlockMemberDungeonsMode;
  level: SkillLevelData;
  classes: SkyBlockMemberDungeonsClasses;
  unlockedJournals: string[];
  treasures: SkyBlockMemberDungeonsTreasureRun[];
  lastDungeonRun: DungeonFloor | 'UNKNOWN';
  secrets: number;
  constructor(data: Record<string, any>) {
    this.catacombs = new SkyBlockMemberDungeonsMode(data?.dungeon_types || {}, 'catacombs');
    this.masterCatacombs = new SkyBlockMemberDungeonsMode(data?.dungeon_types || {}, 'master_catacombs');
    this.level = getLevelByXp(data?.dungeon_types?.catacombs?.experience || 0, { type: 'dungeoneering' });
    this.classes = new SkyBlockMemberDungeonsClasses(data || {});
    this.unlockedJournals = data?.dungeon_journal?.unlocked_journals || [];
    this.treasures = (data?.treasures?.runs || []).map(
      (run: Record<string, any>) => new SkyBlockMemberDungeonsTreasureRun(run, data?.treasures?.chests)
    );
    this.lastDungeonRun = data?.last_dungeon_run || 'UNKNOWN';
    this.secrets = data?.secrets || 0;
  }

  toString(): number {
    return this.level.level;
  }
}

export default SkyBlockMemberDungeons;
