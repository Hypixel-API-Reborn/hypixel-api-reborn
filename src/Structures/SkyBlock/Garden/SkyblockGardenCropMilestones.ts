import { getLevelByXp } from '../../../Utils/SkyblockUtils.js';
import type { SkillLevelData } from '../../../Types/Skyblock.js';

class SkyblockGardenCropMilestones {
  wheat: SkillLevelData;
  carrot: SkillLevelData;
  sugarCane: SkillLevelData;
  potato: SkillLevelData;
  pumpkin: SkillLevelData;
  melon: SkillLevelData;
  cactus: SkillLevelData;
  cocoaBeans: SkillLevelData;
  mushroom: SkillLevelData;
  netherWart: SkillLevelData;
  average: number;
  constructor(data: Record<string, any>) {
    this.wheat = getLevelByXp(data?.WHEAT || 0, { type: 'wheat' });
    this.carrot = getLevelByXp(data?.CARROT_ITEM || 0, { type: 'carrot' });
    this.sugarCane = getLevelByXp(data?.SUGAR_CANE || 0, { type: 'sugarCane' });
    this.potato = getLevelByXp(data?.POTATO_ITEM || 0, { type: 'potato' });
    this.pumpkin = getLevelByXp(data?.PUMPKIN || 0, { type: 'pumpkin' });
    this.melon = getLevelByXp(data?.MELON || 0, { type: 'melon' });
    this.cactus = getLevelByXp(data?.CACTUS || 0, { type: 'cactus' });
    this.cocoaBeans = getLevelByXp(data?.['INK_SACK:3'] || 0, { type: 'cocoaBeans' });
    this.mushroom = getLevelByXp(data?.MUSHROOM_COLLECTION || 0, { type: 'mushroom' });
    this.netherWart = getLevelByXp(data?.NETHER_STALK || 0, { type: 'netherWart' });
    this.average =
      (this.wheat.level +
        this.carrot.level +
        this.sugarCane.level +
        this.potato.level +
        this.pumpkin.level +
        this.melon.level +
        this.cactus.level +
        this.cocoaBeans.level +
        this.mushroom.level +
        this.netherWart.level) /
      10;
  }

  toString(): number {
    return this.average;
  }
}

export default SkyblockGardenCropMilestones;
