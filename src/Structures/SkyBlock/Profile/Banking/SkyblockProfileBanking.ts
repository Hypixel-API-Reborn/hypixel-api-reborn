import SkyblockProfilesBankingTrasnsaction from './SkyblockProfilesBankingTrasnsaction.js';

class SkyblockProfileBanking {
  balance: number;
  transactions: SkyblockProfilesBankingTrasnsaction[];
  constructor(data: Record<string, any>) {
    this.balance = data.balance || 0;
    this.transactions = (data.transactions || []).map(
      (transaction: Record<string, any>) => new SkyblockProfilesBankingTrasnsaction(transaction)
    );
  }

  toString(): number {
    return this.balance;
  }
}

export default SkyblockProfileBanking;
