import SkyBlockProfileBankingTransaction from './SkyBlockProfileBankingTransaction.ts';

class SkyBlockProfileBanking {
  balance: number;
  transactions: SkyBlockProfileBankingTransaction[];
  constructor(data?: Record<string, any> | null) {
    data ??= {};
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
