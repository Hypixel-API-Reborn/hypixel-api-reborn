import SkyblockBingoGoal from './SkyblockBingoGoal.js';

class SkyblockBingo {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date | null;
  id: number | null;
  name: string;
  start: number;
  startAt: Date;
  end: number;
  endAt: Date;

  goals: SkyblockBingoGoal[] | null;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.id = data?.id || null;
    this.name = data?.name || 'UNKNOWN';
    this.start = data?.start || 0;
    this.startAt = new Date(this.start);
    this.end = data?.end || 0;
    this.endAt = new Date(this.end);
    this.goals = Array.isArray(data.goals) ? data.goals.map((goal, index) => new SkyblockBingoGoal(goal, index)) : null;
  }

  getGoal(column: number, row: number): SkyblockBingoGoal | undefined {
    if (!this.goals || 1 > this.goals.length) return;
    return this.goals.find((goal) => goal.row === row && goal.column === column);
  }
}

export default SkyblockBingo;
