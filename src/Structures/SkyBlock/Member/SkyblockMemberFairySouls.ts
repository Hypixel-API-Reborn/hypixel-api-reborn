class SkyblockMemberFairySouls {
  exchanges: number;
  collected: number;
  unspent: number;
  constructor(data: Record<string, any>) {
    this.exchanges = data?.fairy_exchanges || 0;
    this.collected = data?.total_collected || 0;
    this.unspent = data?.unspent_souls || 0;
  }

  toString(): number {
    return this.collected;
  }
}

export default SkyblockMemberFairySouls;
