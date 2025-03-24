import SkyblockGardenActiveVisitor from './SkyblockGardenActiveVisitor.js';
import SkyblockGardenComposter from './SkyblockGardenComposter.js';
import SkyblockGardenCropMilestones from './SkyblockGardenCropMilestones.js';
import SkyblockGardenCropsUpgrades from './SkyblockGardenCropsUpgrades.js';
import SkyblockGardenVisitors from './SkyblockGardenVisitors.js';
import { getLevelByXp } from '../../../Utils/SkyblockUtils.js';
import type { BarnPlot, BarnSkin, SkillLevelData } from '../../../Types/Skyblock.js';

class SkyblockGarden {
  level: SkillLevelData;
  barnSkin: BarnSkin;
  unlockedBarnSkins: BarnSkin[];
  unlockedPlots: BarnPlot[];
  visitors: SkyblockGardenVisitors;
  currentVisitors: SkyblockGardenActiveVisitor[];
  cropMilestones: SkyblockGardenCropMilestones;
  composter: SkyblockGardenComposter;
  cropUpgrades: SkyblockGardenCropsUpgrades;
  constructor(data: Record<string, any>) {
    this.level = getLevelByXp(data?.garden_experience, { type: 'garden' });
    this.barnSkin = data?.selected_barn_skin || 'UNKNOWN';
    this.unlockedBarnSkins = data?.unlocked_barn_skins || [];
    this.unlockedPlots = data?.unlocked_plots_ids || [];
    this.visitors = new SkyblockGardenVisitors(data?.commission_data || {});
    this.currentVisitors = Object.keys(data?.active_commissions || {}).map(
      (visitor) => new SkyblockGardenActiveVisitor(data?.active_commissions?.[visitor], visitor)
    );
    this.cropMilestones = new SkyblockGardenCropMilestones(data?.resources_collected || {});
    this.composter = new SkyblockGardenComposter(data?.composter_data || {});
    this.cropUpgrades = new SkyblockGardenCropsUpgrades(data?.crop_upgrade_levels || {});
  }
}

export default SkyblockGarden;
