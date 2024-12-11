import Bingo from './Bingo.js';

class BingoData {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date | null;
  id: number | null;
  goals: Bingo[] | null;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated, 10);
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.id = parseInt(data.id, 10) || null;
    this.goals = Array.isArray(data.goals) ? data.goals.map((goal, index) => new Bingo(goal, index)) : null;
  }

  getGoal(column: number, row: number): Bingo | undefined {
    if (!this.goals || 1 > this.goals.length) return;
    return this.goals.find((goal) => goal.row === row && goal.column === column);
  }
}

export default BingoData;
