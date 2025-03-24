import type { MiningPower } from '../../../../Types/Skyblock.js';

class SkyblockMemberMiningPowder {
  spent: number;
  powder: number;
  total: number;
  constructor(data: Record<string, any>, type: MiningPower) {
    this.spent = data?.[`powder_spent_${type}`] || 0;
    this.powder = data?.[`powder_${type}`] || 0;
    this.total = this.spent + this.powder;
  }

  toString(): number {
    return this.total;
  }
}

export default SkyblockMemberMiningPowder;
