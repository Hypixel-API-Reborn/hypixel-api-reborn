class SkyblockMemberRiftCastle {
  unlockedPathwaySkip: boolean;
  fairyStep: number;
  grubberStacks: number;
  constructor(data: Record<string, any>) {
    this.unlockedPathwaySkip = data?.unlocked_pathway_skip || false;
    this.fairyStep = data?.fairy_step || 0;
    this.grubberStacks = data?.grubber_stacks || 0;
  }
}

export default SkyblockMemberRiftCastle;
