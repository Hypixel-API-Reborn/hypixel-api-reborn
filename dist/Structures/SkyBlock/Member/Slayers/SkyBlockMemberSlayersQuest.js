class SkyBlockMemberSlayersQuest {
    type;
    tier;
    startTimestamp;
    startAt;
    completionState;
    usedArmor;
    solo;
    combatXp;
    recentMobKills;
    lastKilledMobIsland;
    xpOnLastFollowerSpawn;
    spawnTimestamp;
    spawnAt;
    constructor(data) {
        this.type = data?.type || 'UNKNOWN';
        this.tier = data?.tier || 0;
        this.startTimestamp = data?.start_timestamp || 0;
        this.startAt = new Date(this.startTimestamp);
        this.completionState = data?.completion_state || 0;
        this.usedArmor = data?.used_armor || 0;
        this.solo = data?.solo || 0;
        this.combatXp = data?.combat_xp || 0;
        this.recentMobKills = (data?.recent_mob_kills || []).map((mob) => {
            return { ...mob, timestampAt: new Date(mob.timestamp) };
        });
        this.lastKilledMobIsland = data?.last_killed_mob_island || 'UNKNOWN';
        this.xpOnLastFollowerSpawn = data?.xp_on_last_follower_spawn || 0;
        this.spawnTimestamp = data?.spawn_timestamp || 0;
        this.spawnAt = new Date(this.spawnTimestamp);
    }
}
export default SkyBlockMemberSlayersQuest;
//# sourceMappingURL=SkyBlockMemberSlayersQuest.js.map