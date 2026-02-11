class SkyBlockMemberPlayerStatsSpookyFestival {
    year;
    green;
    purple;
    total;
    constructor(data, year) {
        this.year = year;
        this.green = data?.green_candy || 0;
        this.purple = data?.purple_candy || 0;
        this.total = this.green + this.purple;
    }
    toString() {
        return this.total;
    }
}
export default SkyBlockMemberPlayerStatsSpookyFestival;
//# sourceMappingURL=SkyBlockMemberPlayerStatsSpookyFestival.js.map