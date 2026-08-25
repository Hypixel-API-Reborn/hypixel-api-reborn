import type { BankingTransactionAction } from '../../../../Types/index.js';

class SkyBlockProfileBankingTransaction {
  amount: number;
  timestamp: number;
  action: BankingTransactionAction | 'UNKNOWN';
  user: string | 'Bank Interest' | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.amount = data?.amount ?? 0;
    this.timestamp = data?.timestamp ?? 0;
    this.action = data?.action ?? 'UNKNOWN';
    this.user = data?.initiator_name ?? 'UNKNOWN';
  }

  toString(): number {
    return this.amount;
  }
}

export default SkyBlockProfileBankingTransaction;
