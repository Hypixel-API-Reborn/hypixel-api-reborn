import SkyBlockProfilesBankingTransaction from './SkyBlockProfilesBankingTransaction.js';
class SkyBlockProfileBanking {
    balance;
    transactions;
    constructor(data) {
        this.balance = data.balance || 0;
        this.transactions = (data.transactions || []).map((transaction) => new SkyBlockProfilesBankingTransaction(transaction));
    }
    toString() {
        return this.balance;
    }
}
export default SkyBlockProfileBanking;
//# sourceMappingURL=SkyBlockProfileBanking.js.map