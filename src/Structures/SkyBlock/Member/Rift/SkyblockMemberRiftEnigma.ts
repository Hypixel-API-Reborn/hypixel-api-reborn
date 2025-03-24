class SkyblockMemberRiftEnigma {
  boughtCloak: boolean;
  foundSouls: string[];
  claimedBonusIndex: number;
  constructor(data: Record<string, any>) {
    this.boughtCloak = data?.bought_cloak || false;
    this.foundSouls = data?.found_souls || [];
    this.claimedBonusIndex = data?.claimed_bonus_index || 0;
  }
}

export default SkyblockMemberRiftEnigma;
