import type { BankingTransactionAction } from '../../../../Types/index.js';
declare class SkyBlockProfileBankingTransaction {
    amount: number;
    timestamp: number;
    action: BankingTransactionAction | 'UNKNOWN';
    user: string | 'Bank Interest' | 'UNKNOWN';
    constructor(data: Record<string, any>);
    toString(): number;
}
export default SkyBlockProfileBankingTransaction;
//# sourceMappingURL=SkyBlockProfileBankingTransaction.d.ts.map