class PlayerAdventRewardsDay {
  day: number;
  claimed: boolean;
  claimedTimestamp: number | null;
  claimedAt: Date | null;
  constructor(data: Record<string, any>, day: string) {
    this.day = Number(day);
    this.claimed = Boolean(data?.[`day${day}`]);
    this.claimedTimestamp = this.claimed ? data?.[`day${day}`] : null;
    this.claimedAt = this.claimedTimestamp ? new Date(this.claimedTimestamp) : null;
  }
}

export default PlayerAdventRewardsDay;
