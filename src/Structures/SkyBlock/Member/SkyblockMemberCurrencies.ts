class SkyblockMemberCurrencies {
  purse: number;
  motesPurse: number;
  witherEssence: number;
  dragonEssence: number;
  spiderEssence: number;
  undeadEssence: number;
  diamondEssence: number;
  goldEssence: number;
  iceEssence: number;
  crimsonEssence: number;
  constructor(data: Record<string, any>) {
    this.purse = data?.coin_purse || 0;
    this.motesPurse = data?.motes_purse || 0;
    this.witherEssence = data.essence?.WITHER?.current || 0;
    this.dragonEssence = data.essence?.DRAGON?.current || 0;
    this.spiderEssence = data.essence?.SPIDER?.current || 0;
    this.undeadEssence = data.essence?.UNDEAD?.current || 0;
    this.diamondEssence = data.essence?.DIAMOND?.current || 0;
    this.goldEssence = data.essence?.GOLD?.current || 0;
    this.iceEssence = data.essence?.ICE?.current || 0;
    this.crimsonEssence = data.essence?.CRIMSON?.current || 0;
  }
}

export default SkyblockMemberCurrencies;
