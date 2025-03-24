import type { BankingTrasnsactionAction } from '../../../../Types/Skyblock.js';

class SkyblockProfilesBankingTrasnsaction {
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
}

export default SkyblockProfilesBankingTrasnsaction;
