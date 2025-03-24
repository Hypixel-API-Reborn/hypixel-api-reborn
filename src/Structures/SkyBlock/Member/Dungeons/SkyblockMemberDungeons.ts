import SkyblockMemberDungeonsClasses from './SkyblockMemberDungeonsClasses.js';
import SkyblockMemberDungeonsMode from './SkyblockMemberDungeonsMode.js';
import SkyblockMemberDungeonsTreasureRun from './SkyblockMemberDungeonsTreasureRun.js';
import { getLevelByXp } from '../../../../Utils/SkyblockUtils.js';
import type { DungeonFloor, SkillLevelData } from '../../../../Types/Skyblock.js';

class SkyblockMemberDungeons {
  catacombs: SkyblockMemberDungeonsMode;
  masterCatacombs: SkyblockMemberDungeonsMode;
  level: SkillLevelData;
  classes: SkyblockMemberDungeonsClasses;
  unlockedJournals: string[];
  treasures: SkyblockMemberDungeonsTreasureRun[];
  lastDungeonRun: DungeonFloor | 'UNKNOWN';
  secrets: number;
  constructor(data: Record<string, any>) {
    this.catacombs = new SkyblockMemberDungeonsMode(data?.dungeon_types || {}, 'catacombs');
    this.masterCatacombs = new SkyblockMemberDungeonsMode(data?.dungeon_types || {}, 'master_catacombs');
    this.level = getLevelByXp(data?.dungeon_types?.catacombs?.experience || 0, { type: 'dungeoneering' });
    this.classes = new SkyblockMemberDungeonsClasses(data || {});
    this.unlockedJournals = data?.dungeon_journal?.unlocked_journals || [];
    this.treasures = (data?.treasures?.runs || []).map(
      (run: Record<string, any>) => new SkyblockMemberDungeonsTreasureRun(run, data?.treasures?.chests)
    );
    this.lastDungeonRun = data?.last_dungeon_run || 'UNKNOWN';
    this.secrets = data?.secrets || 0;
  }

  toString(): number {
    return this.level.level;
  }
}

export default SkyblockMemberDungeons;
