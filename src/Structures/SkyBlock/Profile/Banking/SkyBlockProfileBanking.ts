import SkyBlockProfilesBankingTransaction from './SkyBlockProfilesBankingTransaction.js';

class SkyBlockProfileBanking {
  balance: number;
  transactions: SkyBlockProfilesBankingTransaction[];
  constructor(data: Record<string, any>) {
    this.balance = data.balance || 0;
    this.transactions = (data.transactions || []).map(
      (transaction: Record<string, any>) => new SkyBlockProfilesBankingTransaction(transaction)
    );
  }

  toString(): number {
    return this.balance;
  }
}

export default SkyBlockProfileBanking;
