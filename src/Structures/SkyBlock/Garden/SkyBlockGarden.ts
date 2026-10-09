import SkyBlockGardenActiveVisitor from './SkyBlockGardenActiveVisitor.ts';
import SkyBlockGardenComposter from './SkyBlockGardenComposter.ts';
import SkyBlockGardenCropMilestones from './SkyBlockGardenCropMilestones.ts';
import SkyBlockGardenCropsUpgrades from './SkyBlockGardenCropsUpgrades.ts';
import SkyBlockGardenVisitors from './SkyBlockGardenVisitors.ts';
import { getLevelByXp } from '../../../Utils/index.ts';
import type { BarnPlot, BarnSkin, SkillLevelData } from '../../../Types/index.ts';

class SkyBlockGarden {
  level: SkillLevelData;
  barnSkin: BarnSkin;
  unlockedBarnSkins: BarnSkin[];
  unlockedPlots: BarnPlot[];
  visitors: SkyBlockGardenVisitors;
  currentVisitors: SkyBlockGardenActiveVisitor[];
  cropMilestones: SkyBlockGardenCropMilestones;
  composter: SkyBlockGardenComposter;
  cropUpgrades: SkyBlockGardenCropsUpgrades;
  constructor(data: Record<string, any>) {
    this.level = getLevelByXp(data?.garden_experience, { type: 'garden' });
    this.barnSkin = (data?.selected_barn_skin ?? 'UNKNOWN') as BarnSkin;
    this.unlockedBarnSkins = data?.unlocked_barn_skins ?? [];
    this.unlockedPlots = data?.unlocked_plots_ids ?? [];
    this.visitors = new SkyBlockGardenVisitors(data?.commission_data ?? {});
    this.currentVisitors = Object.keys(data?.active_commissions ?? {}).map(
      (visitor) => new SkyBlockGardenActiveVisitor(data?.active_commissions?.[visitor], visitor)
    );
    this.cropMilestones = new SkyBlockGardenCropMilestones(data?.resources_collected ?? {});
    this.composter = new SkyBlockGardenComposter(data?.composter_data ?? {});
    this.cropUpgrades = new SkyBlockGardenCropsUpgrades(data?.crop_upgrade_levels ?? {});
  }

  toString(): number {
    return this.level.level;
  }
}

export default SkyBlockGarden;
