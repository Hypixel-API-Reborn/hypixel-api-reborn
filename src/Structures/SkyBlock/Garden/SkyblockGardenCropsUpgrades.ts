class SkyblockGardenCropsUpgrades {
  wheat: number;
  carrot: number;
  sugarCane: number;
  potato: number;
  pumpkin: number;
  melon: number;
  cactus: number;
  cocoaBeans: number;
  mushroom: number;
  netherWart: number;
  constructor(data: Record<string, any>) {
    this.wheat = data?.WHEAT || 0;
    this.carrot = data?.CARROT_ITEM || 0;
    this.sugarCane = data?.SUGAR_CANE || 0;
    this.potato = data?.POTATO_ITEM || 0;
    this.pumpkin = data?.PUMPKIN || 0;
    this.melon = data?.MELON || 0;
    this.cactus = data?.CACTUS || 0;
    this.cocoaBeans = data?.['INK_SACK:3'] || 0;
    this.mushroom = data?.MUSHROOM_COLLECTION || 0;
    this.netherWart = data?.NETHER_STALK || 0;
  }
}

export default SkyblockGardenCropsUpgrades;
