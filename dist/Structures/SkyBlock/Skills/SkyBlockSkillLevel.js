class SkyBlockSkillLevel {
    level;
    totalExpRequired;
    unlocks;
    constructor(data) {
        this.level = data?.level || 0;
        this.totalExpRequired = data?.totalExpRequired || 0;
        this.unlocks = data?.unlocks || [];
    }
    toString() {
        return this.level;
    }
}
export default SkyBlockSkillLevel;
//# sourceMappingURL=SkyBlockSkillLevel.js.map