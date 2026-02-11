import SkyBlockSkillLevel from './SkyBlockSkillLevel.js';
declare class SkyBlockSkill {
    name: string;
    description: string;
    maxLevel: number;
    levels: SkyBlockSkillLevel[];
    constructor(data: Record<string, any>);
    toString(): string;
}
export default SkyBlockSkill;
//# sourceMappingURL=SkyBlockSkill.d.ts.map