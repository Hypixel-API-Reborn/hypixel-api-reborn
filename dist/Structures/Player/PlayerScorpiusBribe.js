class PlayerScorpiusBribe {
    year;
    claimedTimestamp;
    claimedAt;
    constructor(timestamp, year) {
        this.year = Number(year);
        this.claimedTimestamp = timestamp;
        this.claimedAt = new Date(this.claimedTimestamp);
    }
}
export default PlayerScorpiusBribe;
//# sourceMappingURL=PlayerScorpiusBribe.js.map