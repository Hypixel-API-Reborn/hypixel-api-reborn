import SkyBlockSkill from './SkyBlockSkill.js';
import type RequestData from '../../../Private/RequestData.js';
declare class SkyBlockSkills {
    lastUpdated: number;
    lastUpdatedAt: Date;
    version: string;
    farming: SkyBlockSkill;
    mining: SkyBlockSkill;
    combat: SkyBlockSkill;
    foraging: SkyBlockSkill;
    fishing: SkyBlockSkill;
    enchanting: SkyBlockSkill;
    alchemy: SkyBlockSkill;
    carpentry: SkyBlockSkill;
    runecrafting: SkyBlockSkill;
    social: SkyBlockSkill;
    taming: SkyBlockSkill;
    constructor(data: Record<string, any>);
    isRaw(): this is RequestData;
}
export default SkyBlockSkills;
//# sourceMappingURL=SkyBlockSkills.d.ts.map