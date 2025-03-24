class SkyblockMemberRiftWestVillageKatHouse {
  binCollectedSilverfish: number;
  binCollectedSpider: number;
  binCollectedMosquito: number;
  constructor(data: Record<string, any>) {
    this.binCollectedSilverfish = data?.bin_collected_silverfish || 0;
    this.binCollectedSpider = data?.bin_collected_spider || 0;
    this.binCollectedMosquito = data?.bin_collected_mosquito || 0;
  }
}

export default SkyblockMemberRiftWestVillageKatHouse;
