import SkyBlockMemberDungeonsFloorRun from './SkyBlockMemberDungeonsFloorRun.js';
class SkyBlockMemberDungeonsFloor {
    timesPlayed;
    bestRuns;
    bestScore;
    mobsKilled;
    mostMobsKilled;
    mostDamageBerserk;
    mostDamageMage;
    mostDamageHealer;
    mostDamageArcher;
    mostDamageTank;
    mostHealing;
    watcherKills;
    fastestTimeS;
    fastestTimeSPlus;
    constructor(data, floorNumber) {
        this.timesPlayed = data?.tier_completions?.[floorNumber] || 0;
        this.bestRuns = (data?.best_runs?.[floorNumber] || []).map((run) => new SkyBlockMemberDungeonsFloorRun(run));
        this.bestScore = data?.best_score?.[floorNumber] || 0;
        this.mobsKilled = data?.mobs_killed?.[floorNumber] || 0;
        this.mostMobsKilled = data?.most_mobs_killed?.[floorNumber] || 0;
        this.mostDamageBerserk = data?.most_damage_berserk?.[floorNumber] || 0;
        this.mostDamageMage = data?.most_damage_mage?.[floorNumber] || 0;
        this.mostDamageHealer = data?.most_damage_healer?.[floorNumber] || 0;
        this.mostDamageArcher = data?.most_damage_archer?.[floorNumber] || 0;
        this.mostDamageTank = data?.most_damage_tank?.[floorNumber] || 0;
        this.mostHealing = data?.most_healing?.[floorNumber] || 0;
        this.watcherKills = data?.watcher_kills?.[floorNumber] || 0;
        this.fastestTimeS = data?.fastest_time_s?.[floorNumber] || 0;
        this.fastestTimeSPlus = data?.fastest_time_s_plus?.[floorNumber] || 0;
    }
    toString() {
        return this.timesPlayed;
    }
}
export default SkyBlockMemberDungeonsFloor;
//# sourceMappingURL=SkyBlockMemberDungeonsFloor.js.map