class SkyBlockMemberJacobContestsPerks {
  doubleDrops: number;
  farmingLevelCap: number;
  personalBests: boolean;
  constructor(data: Record<string, any>) {
    this.doubleDrops = data?.double_drops || 0;
    this.farmingLevelCap = data?.farming_level_cap || 0;
    this.personalBests = data?.personal_bests || false;
  }
}

export default SkyBlockMemberJacobContestsPerks;
