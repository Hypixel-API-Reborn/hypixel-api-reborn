class SkyBlockMemberPlayerStatsPets {
  oresMined: number;
  seaCreaturesKilled: number;
  totalExpGained: number;
  constructor(data: Record<string, any>) {
    this.oresMined = data?.milestone?.ores_mined ?? 0;
    this.seaCreaturesKilled = data?.milestone?.sea_creatures_killed ?? 0;
    this.totalExpGained = data?.total_exp_gained ?? 0;
  }
}

export default SkyBlockMemberPlayerStatsPets;
