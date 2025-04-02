import SkyBlockBingoGoal from './SkyBlockBingoGoal.js';

class SkyBlockBingo {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  id: number | null;
  name: string;
  start: number;
  startAt: Date;
  end: number;
  endAt: Date;
  goals: SkyBlockBingoGoal[] | null;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.id = data?.id || null;
    this.name = data?.name || 'UNKNOWN';
    this.start = data?.start || 0;
    this.startAt = new Date(this.start);
    this.end = data?.end || 0;
    this.endAt = new Date(this.end);
    this.goals = Array.isArray(data.goals) ? data.goals.map((goal, index) => new SkyBlockBingoGoal(goal, index)) : null;
  }

  toString(): number | null {
    return this.id;
  }
}

export default SkyBlockBingo;
