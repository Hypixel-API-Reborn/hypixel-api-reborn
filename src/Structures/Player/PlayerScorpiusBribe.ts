class PlayerScorpiusBribe {
  year: number;
  claimedTimestamp: number;
  claimedAt: Date;
  constructor(timestamp: number, year: string) {
    this.year = Number(year);
    this.claimedTimestamp = timestamp;
    this.claimedAt = new Date(this.claimedTimestamp);
  }
}

export default PlayerScorpiusBribe;
