import SkyBlockProfileBankingTransaction from './SkyBlockProfileBankingTransaction.js';

class SkyBlockProfileBanking {
  balance: number;
  transactions: SkyBlockProfileBankingTransaction[];
  constructor(data?: Record<string, any> | null) {
    data = data ?? {};
    this.balance = data.balance ?? 0;
    this.transactions = (data.transactions ?? []).map(
      (transaction: Record<string, any>) => new SkyBlockProfileBankingTransaction(transaction)
    );
  }

  toString(): number {
    return this.balance;
  }
}

export default SkyBlockProfileBanking;
