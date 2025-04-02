import SkyBlockProfilesBankingTrasnsaction from './SkyBlockProfilesBankingTrasnsaction.js';

class SkyBlockProfileBanking {
  balance: number;
  transactions: SkyBlockProfilesBankingTrasnsaction[];
  constructor(data: Record<string, any>) {
    this.balance = data.balance || 0;
    this.transactions = (data.transactions || []).map(
      (transaction: Record<string, any>) => new SkyBlockProfilesBankingTrasnsaction(transaction)
    );
  }

  toString(): number {
    return this.balance;
  }
}

export default SkyBlockProfileBanking;
