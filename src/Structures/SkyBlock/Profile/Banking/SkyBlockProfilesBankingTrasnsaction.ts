import type { BankingTrasnsactionAction } from '../../../../Types/SkyBlock.js';

class SkyBlockProfilesBankingTrasnsaction {
  amount: number;
  timestamp: number;
  action: BankingTrasnsactionAction | 'UNKNOWN';
  user: string | 'Bank Interest' | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.amount = data?.amount || 0;
    this.timestamp = data?.timestamp || 0;
    this.action = data?.action || 'UNKNONW';
    this.user = data?.initiator_name || 'UNKNOWN';
  }

  toString(): number {
    return this.amount;
  }
}

export default SkyBlockProfilesBankingTrasnsaction;
