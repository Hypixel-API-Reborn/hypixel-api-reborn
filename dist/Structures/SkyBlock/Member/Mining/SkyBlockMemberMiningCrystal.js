class SkyBlockMemberMiningCrystal {
    found;
    totalFound;
    totalPlaced;
    constructor(data) {
        this.found = data.state ? data.state === 'FOUND' : false;
        this.totalFound = data?.total_found || 0;
        this.totalPlaced = data?.total_placed || 0;
    }
    toString() {
        return this.found;
    }
}
export default SkyBlockMemberMiningCrystal;
//# sourceMappingURL=SkyBlockMemberMiningCrystal.js.map