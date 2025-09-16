class PlayerQuestCompletion {
  amount: number;
  timestamp: number | null;
  timestampAt: Date | null;
  constructor(data: Record<string, number>) {
    this.amount = data.length || 0;
    this.timestamp = data?.time ? data.time : null;
    this.timestampAt = this.timestamp ? new Date(this.timestamp) : null;
  }
}

export default PlayerQuestCompletion;
