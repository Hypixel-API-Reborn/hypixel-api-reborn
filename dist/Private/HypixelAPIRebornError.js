class HypixelAPIRebornError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Hypixel API Reborn';
    }
    toString() {
        return this.message;
    }
}
export default HypixelAPIRebornError;
//# sourceMappingURL=HypixelAPIRebornError.js.map