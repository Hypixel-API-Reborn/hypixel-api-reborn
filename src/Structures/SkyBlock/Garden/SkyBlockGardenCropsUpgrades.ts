import { CalculateAverage } from '../../../Utils/numberUtils.ts';

class SkyBlockGardenCropsUpgrades {
  wheat: number;
  carrot: number;
  potato: number;
  pumpkin: number;
  sugarCane: number;
  melon: number;
  cactus: number;
  cocoaBeans: number;
  mushroom: number;
  netherWart: number;
  moonFlower: number;
  sunFlower: number;
  wildRose: number;
  constructor(data: Record<string, any>) {
    this.wheat = data?.WHEAT ?? 0;
    this.carrot = data?.CARROT_ITEM ?? 0;
    this.potato = data?.POTATO_ITEM ?? 0;
    this.pumpkin = data?.PUMPKIN ?? 0;
    this.sugarCane = data?.SUGAR_CANE ?? 0;
    this.melon = data?.MELON ?? 0;
    this.cactus = data?.CACTUS ?? 0;
    this.cocoaBeans = data?.['INK_SACK:3'] ?? 0;
    this.mushroom = data?.MUSHROOM_COLLECTION ?? 0;
    this.netherWart = data?.NETHER_STALK ?? 0;
    this.moonFlower = data?.MOONFLOWER ?? 0;
    this.sunFlower = data?.DOUBLE_PLANT ?? 0;
    this.wildRose = data?.WILD_ROSE ?? 0;
  }

  get average(): number {
    return CalculateAverage(Object.values(this));
  }

  toString(): number {
    return this.average;
  }
}

export default SkyBlockGardenCropsUpgrades;
