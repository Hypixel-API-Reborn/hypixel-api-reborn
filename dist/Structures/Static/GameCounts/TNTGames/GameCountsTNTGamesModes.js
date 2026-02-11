class GameCountsTNTGamesModes {
    PVPRun;
    TNTTag;
    TNTRun;
    bowSpleef;
    capture;
    constructor(data) {
        this.PVPRun = data?.PVPRUN || 0;
        this.TNTTag = data?.TNTAG || 0;
        this.TNTRun = data?.TNTRUN || 0;
        this.bowSpleef = data?.BOWSPLEEF || 0;
        this.capture = data?.CAPTURE || 0;
    }
}
export default GameCountsTNTGamesModes;
//# sourceMappingURL=GameCountsTNTGamesModes.js.map