class PlayerAdventRewardsDay {
    day;
    claimed;
    claimedTimestamp;
    claimedAt;
    constructor(data, day) {
        this.day = Number(day);
        this.claimed = Boolean(data?.[`day${day}`]);
        this.claimedTimestamp = this.claimed ? data?.[`day${day}`] : null;
        this.claimedAt = this.claimedTimestamp ? new Date(this.claimedTimestamp) : null;
    }
}
export default PlayerAdventRewardsDay;
//# sourceMappingURL=PlayerAdventRewardsDay.js.map