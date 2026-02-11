import SkyBlockMemberDungeonsClasses from './SkyBlockMemberDungeonsClasses.js';
import SkyBlockMemberDungeonsMode from './SkyBlockMemberDungeonsMode.js';
import SkyBlockMemberDungeonsTreasureRun from './SkyBlockMemberDungeonsTreasureRun.js';
import { getLevelByXp } from '../../../../Utils/SkyBlockUtils.js';
class SkyBlockMemberDungeons {
    catacombs;
    masterCatacombs;
    level;
    classes;
    unlockedJournals;
    treasures;
    lastDungeonRun;
    secrets;
    constructor(data) {
        this.catacombs = new SkyBlockMemberDungeonsMode(data?.dungeon_types || {}, 'catacombs');
        this.masterCatacombs = new SkyBlockMemberDungeonsMode(data?.dungeon_types || {}, 'master_catacombs');
        this.level = getLevelByXp(data?.dungeon_types?.catacombs?.experience || 0, { type: 'dungeoneering' });
        this.classes = new SkyBlockMemberDungeonsClasses(data);
        this.unlockedJournals = data?.dungeon_journal?.unlocked_journals || [];
        this.treasures = (data?.treasures?.runs || []).map((run) => new SkyBlockMemberDungeonsTreasureRun(run, data?.treasures?.chests));
        this.lastDungeonRun = data?.last_dungeon_run || 'UNKNOWN';
        this.secrets = data?.secrets || 0;
    }
    toString() {
        return this.level.level;
    }
}
export default SkyBlockMemberDungeons;
//# sourceMappingURL=SkyBlockMemberDungeons.js.map