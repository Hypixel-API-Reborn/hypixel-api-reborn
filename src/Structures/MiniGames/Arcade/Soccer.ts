class Soccer {
  goals: number;
  kicks: number;
  powerkicks: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.goals = data?.goals_soccer || 0;
    this.kicks = data?.kicks_soccer || 0;
    this.powerkicks = data?.powerkicks_soccer || 0;
    this.wins = data?.wins_soccer || 0;
  }
}

export default Soccer;
