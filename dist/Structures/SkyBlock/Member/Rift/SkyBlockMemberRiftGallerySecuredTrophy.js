class SkyBlockMemberRiftGallerySecuredTrophy {
    type;
    timestamp;
    timestampAt;
    visits;
    constructor(data) {
        this.type = data?.type || 0;
        this.timestamp = data?.timestamp || 0;
        this.timestampAt = new Date(this.timestamp);
        this.visits = data?.visits || 0;
    }
}
export default SkyBlockMemberRiftGallerySecuredTrophy;
//# sourceMappingURL=SkyBlockMemberRiftGallerySecuredTrophy.js.map