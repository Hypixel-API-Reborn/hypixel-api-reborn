class SkyBlockMemberDungeonsFloorRun {
    timestamp;
    explorationScore;
    speedScore;
    skillScore;
    bonusScore;
    score;
    selectedClass;
    teammates;
    elapsedTime;
    damageDealt;
    deaths;
    mobsKilled;
    secretsFound;
    damageMitigated;
    allyHealing;
    constructor(data) {
        this.timestamp = data?.timestamp || 0;
        this.explorationScore = data?.score_exploration || 0;
        this.speedScore = data?.score_speed || 0;
        this.skillScore = data?.score_skill || 0;
        this.bonusScore = data?.score_bonus || 0;
        this.score = this.explorationScore + this.speedScore + this.skillScore + this.bonusScore;
        this.selectedClass = data?.dungeon_class || 'mage';
        this.teammates = data?.teammates || [];
        this.elapsedTime = data?.elapsed_time || 0;
        this.damageDealt = data?.damage_delt || 0;
        this.deaths = data?.deaths || 0;
        this.mobsKilled = data?.mobs_killed || 0;
        this.secretsFound = data?.secrets_found || 0;
        this.damageMitigated = data?.damage_mitigated || 0;
        this.allyHealing = data?.ally_healing || 0;
    }
    toString() {
        return this.score;
    }
}
export default SkyBlockMemberDungeonsFloorRun;
//# sourceMappingURL=SkyBlockMemberDungeonsFloorRun.js.map