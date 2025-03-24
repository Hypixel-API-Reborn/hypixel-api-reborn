class SkyblockMemberRiftDreamFarm {
  shaniaStage: number;
  caducousFeederUses: number[];
  constructor(data: Record<string, any>) {
    this.shaniaStage = data?.shania_stage || 0;
    this.caducousFeederUses = data?.caducous_feeder_uses || [];
  }
}

export default SkyblockMemberRiftDreamFarm;
