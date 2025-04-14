class SkyBlockMemberQuestsTrapper {
  peltCount: number;
  lastCompletedTimestamp: number;
  lastCompletedAt: Date;
  constructor(data: Record<string, any>) {
    this.peltCount = data?.pelt_count || 0;
    this.lastCompletedTimestamp = data?.last_task_time || 0;
    this.lastCompletedAt = new Date(this.lastCompletedTimestamp);
  }

  toString(): number {
    return this.peltCount;
  }
}

export default SkyBlockMemberQuestsTrapper;
