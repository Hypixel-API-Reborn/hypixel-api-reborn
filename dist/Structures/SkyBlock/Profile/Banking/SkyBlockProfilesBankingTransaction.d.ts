import type { BankingTransactionAction } from '../../../../Types/SkyBlock.js';
declare class SkyBlockProfilesBankingTransaction {
    amount: number;
    timestamp: number;
    action: BankingTransactionAction | 'UNKNOWN';
    user: string | 'Bank Interest' | 'UNKNOWN';
    constructor(data: Record<string, any>);
    toString(): number;
}
export default SkyBlockProfilesBankingTransaction;
//# sourceMappingURL=SkyBlockProfilesBankingTransaction.d.ts.map