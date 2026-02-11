import SkyBlockSkill from './SkyBlockSkill.js';
class SkyBlockSkills {
    lastUpdated;
    lastUpdatedAt;
    version;
    farming;
    mining;
    combat;
    foraging;
    fishing;
    enchanting;
    alchemy;
    carpentry;
    runecrafting;
    social;
    taming;
    constructor(data) {
        this.lastUpdated = data?.lastUpdated || 0;
        this.lastUpdatedAt = new Date(this.lastUpdated);
        this.version = data?.version || 'UNKNOWN';
        this.farming = new SkyBlockSkill(data?.skills?.FARMING || {});
        this.mining = new SkyBlockSkill(data?.skills?.MINING || {});
        this.combat = new SkyBlockSkill(data?.skills?.COMBAT || {});
        this.foraging = new SkyBlockSkill(data?.skills?.FORAGING || {});
        this.fishing = new SkyBlockSkill(data?.skills?.FISHING || {});
        this.enchanting = new SkyBlockSkill(data?.skills?.ENCHANTING || {});
        this.alchemy = new SkyBlockSkill(data?.skills?.ALCHEMY || {});
        this.carpentry = new SkyBlockSkill(data?.skills?.CARPENTRY || {});
        this.runecrafting = new SkyBlockSkill(data?.skills?.RUNECRAFTING || {});
        this.social = new SkyBlockSkill(data?.skills?.SOCIAL || {});
        this.taming = new SkyBlockSkill(data?.skills?.TAMING || {});
    }
    isRaw() {
        return false;
    }
}
export default SkyBlockSkills;
//# sourceMappingURL=SkyBlockSkills.js.map