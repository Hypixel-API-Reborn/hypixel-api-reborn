import SkyBlockSkillLevel from './SkyBlockSkillLevel.js';
class SkyBlockSkill {
    name;
    description;
    maxLevel;
    levels;
    constructor(data) {
        this.name = data?.name || 'UNKNOWN';
        this.description = data?.description || 'UNKNOWN';
        this.maxLevel = data?.maxLevel || 0;
        this.levels = (data?.levels || []).map((level) => new SkyBlockSkillLevel(level));
    }
    toString() {
        return this.name;
    }
}
export default SkyBlockSkill;
//# sourceMappingURL=SkyBlockSkill.js.map