class SkyBlockMemberRiftAccess {
    lastFree;
    lastFreeAt;
    consumedPrism;
    chargeTrackTimestamp;
    chargeTrackTimestampAt;
    constructor(data) {
        this.lastFree = data?.last_free || 0;
        this.lastFreeAt = new Date(this.lastFree);
        this.consumedPrism = data?.consumed_prism || false;
        this.chargeTrackTimestamp = data?.charge_track_timestamp || 0;
        this.chargeTrackTimestampAt = new Date(this.chargeTrackTimestamp);
    }
}
export default SkyBlockMemberRiftAccess;
//# sourceMappingURL=SkyBlockMemberRiftAccess.js.map