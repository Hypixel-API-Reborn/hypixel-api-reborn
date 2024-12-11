class Football {
  wins: number;
  goals: number;
  kicks: number;
  powerKicks: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_soccer || 0;
    this.goals = data?.goals_soccer || 0;
    this.kicks = data?.kicks_soccer || 0;
    this.powerKicks = data?.powerkicks_soccer || 0;
  }
}

export default Football;
