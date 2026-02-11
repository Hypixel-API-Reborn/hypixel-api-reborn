import SkyBlockGardenActiveVisitor from './SkyBlockGardenActiveVisitor.js';
import SkyBlockGardenComposter from './SkyBlockGardenComposter.js';
import SkyBlockGardenCropMilestones from './SkyBlockGardenCropMilestones.js';
import SkyBlockGardenCropsUpgrades from './SkyBlockGardenCropsUpgrades.js';
import SkyBlockGardenVisitors from './SkyBlockGardenVisitors.js';
import type RequestData from '../../../Private/RequestData.js';
import type { BarnPlot, BarnSkin, SkillLevelData } from '../../../Types/SkyBlock.js';
declare class SkyBlockGarden {
    level: SkillLevelData;
    barnSkin: BarnSkin;
    unlockedBarnSkins: BarnSkin[];
    unlockedPlots: BarnPlot[];
    visitors: SkyBlockGardenVisitors;
    currentVisitors: SkyBlockGardenActiveVisitor[];
    cropMilestones: SkyBlockGardenCropMilestones;
    composter: SkyBlockGardenComposter;
    cropUpgrades: SkyBlockGardenCropsUpgrades;
    constructor(data: Record<string, any>);
    toString(): number;
    isRaw(): this is RequestData;
}
export default SkyBlockGarden;
//# sourceMappingURL=SkyBlockGarden.d.ts.map