class SkyBlockProfilesBankingTransaction {
    amount;
    timestamp;
    action;
    user;
    constructor(data) {
        this.amount = data?.amount || 0;
        this.timestamp = data?.timestamp || 0;
        this.action = data?.action || 'UNKNOWN';
        this.user = data?.initiator_name || 'UNKNOWN';
    }
    toString() {
        return this.amount;
    }
}
export default SkyBlockProfilesBankingTransaction;
//# sourceMappingURL=SkyBlockProfilesBankingTransaction.js.map