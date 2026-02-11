import SkyBlockMemberDungeonsTreasuresChest from './SkyBlockMemberDungeonsTreasuresChest.js';
class SkyBlockMemberDungeonsTreasureRun {
    runId;
    completionTimestamp;
    completionDate;
    type;
    dungeonTier;
    participants;
    chests;
    constructor(data, chestData) {
        this.runId = data?.run_id || 'UNKNOWN';
        this.completionTimestamp = data?.completion_ts || 0;
        this.completionDate = new Date(this.completionTimestamp);
        this.type = data?.type || 'catacombs';
        this.dungeonTier = data?.dungeon_tier || 0;
        this.participants = data?.participants || [];
        this.chests = chestData
            .filter((chest) => chest.run_id === this.runId)
            .map((chest) => new SkyBlockMemberDungeonsTreasuresChest(chest));
    }
    toString() {
        return this.runId;
    }
}
export default SkyBlockMemberDungeonsTreasureRun;
//# sourceMappingURL=SkyBlockMemberDungeonsTreasureRun.js.map