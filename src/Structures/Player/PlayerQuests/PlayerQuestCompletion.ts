class PlayerQuestCompletion {
  amount: number;
  timestamp: number;
  timestampAt: Date;
  constructor(data: Record<string, number>) {
    this.amount = data.length || 0;
    this.timestamp = data?.time || 0;
    this.timestampAt = new Date(this.timestamp);
  }
}

export default PlayerQuestCompletion;
