import { getLevelByXp } from '../../Utils/SkyblockUtils.js';
import type {
  SkillLevel,
  SkyblockGardenComposter,
  SkyblockGardenCropMilestones,
  SkyblockGardenVisitor,
  SkyblockGarenCrops
} from '../../Types/Skyblock.js';

class SkyblockGarden {
  level: SkillLevel;
  barnSkin: string;
  unlockedPlots: string[];
  visitors: SkyblockGardenVisitor;
  cropMilestones: SkyblockGardenCropMilestones;
  composter: SkyblockGardenComposter;
  cropUpgrades: SkyblockGarenCrops;
  constructor(data: Record<string, any>) {
    this.level = getLevelByXp(data?.garden?.garden_experience || 0, 'garden');
    this.barnSkin = data?.garden?.selected_barn_skin || '';
    this.unlockedPlots = data?.garden?.unlocked_plots_ids || [];
    this.visitors = {
      visited: data?.garden?.commission_data?.visits || {},
      completed: data?.garden?.commission_data?.completed || {},
      served: {
        total: data?.garden?.commission_data?.total_completed || 0,
        unique: data?.garden?.commission_data?.unique_npcs_served || 0
      }
    };
    this.cropMilestones = {
      wheat: getLevelByXp(data?.garden?.resources_collected?.WHEAT || 0, 'wheat'),
      carrot: getLevelByXp(data?.garden?.resources_collected?.CARROT_ITEM || 0, 'carrot'),
      sugarCane: getLevelByXp(data?.garden?.resources_collected?.SUGAR_CANE || 0, 'sugarCane'),
      potato: getLevelByXp(data?.garden?.resources_collected?.POTATO_ITEM || 0, 'potato'),
      pumpkin: getLevelByXp(data?.garden?.resources_collected?.PUMPKIN || 0, 'pumpkin'),
      melon: getLevelByXp(data?.garden?.resources_collected?.MELON || 0, 'melon'),
      cactus: getLevelByXp(data?.garden?.resources_collected?.CACTUS || 0, 'cactus'),
      cocoaBeans: getLevelByXp(data?.garden?.resources_collected?.['INK_SACK:3'] || 0, 'cocoaBeans'),
      mushroom: getLevelByXp(data?.garden?.resources_collected?.MUSHROOM_COLLECTION || 0, 'mushroom'),
      netherWart: getLevelByXp(data?.garden?.resources_collected?.NETHER_STALK || 0, 'netherWart')
    };
    this.composter = {
      organicMatter: data?.garden?.composter_data?.organic_matter || 0,
      fuelUnits: data?.garden?.composter_data?.fuel_units || 0,
      compostUnits: data?.garden?.composter_data?.compost_units || 0,
      compostItems: data?.garden?.composter_data?.compost_items || 0,
      conversionTicks: data?.garden?.composter_data?.conversion_ticks || 0,
      upgrades: {
        speed: data?.garden?.composter_data?.upgrades?.speed || 0,
        multiDrop: data?.garden?.composter_data?.upgrades?.multi_drop || 0,
        fuelCap: data?.garden?.composter_data?.upgrades?.fuel_cap || 0,
        organicMatterCap: data?.garden?.composter_data?.upgrades?.organic_matter_cap || 0,
        costReduction: data?.garden?.composter_data?.upgrades?.cost_reduction || 0
      }
    };
    this.cropUpgrades = {
      wheat: data?.garden?.crop_upgrade_levels?.WHEAT || 0,
      carrot: data?.garden?.crop_upgrade_levels?.CARROT_ITEM || 0,
      sugarCane: data?.garden?.crop_upgrade_levels?.SUGAR_CANE || 0,
      potato: data?.garden?.crop_upgrade_levels?.POTATO_ITEM || 0,
      pumpkin: data?.garden?.crop_upgrade_levels?.PUMPKIN || 0,
      melon: data?.garden?.crop_upgrade_levels?.MELON || 0,
      cactus: data?.garden?.crop_upgrade_levels?.CACTUS || 0,
      cocoaBeans: data?.garden?.crop_upgrade_levels?.['INK_SACK:3'] || 0,
      mushroom: data?.garden?.crop_upgrade_levels?.MUSHROOM_COLLECTION || 0,
      netherWart: data?.garden?.crop_upgrade_levels?.NETHER_STALK || 0
    };
  }
}

export default SkyblockGarden;
