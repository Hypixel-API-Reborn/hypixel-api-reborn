class BedWarsSettings {
    deposit;
    slumberItemNotification;
    slumberWalletFull;
    trapRemoval;
    constructor(data) {
        this.deposit = data?.deposit || 'ENABLED';
        this.slumberItemNotification = data?.slumberItemNotification || 'CHAT_MESSAGES';
        this.slumberWalletFull = data?.slumberWalletFull || true;
        this.trapRemoval = data?.trapRemoval || false;
    }
}
export default BedWarsSettings;
//# sourceMappingURL=BedWarsSettings.js.map