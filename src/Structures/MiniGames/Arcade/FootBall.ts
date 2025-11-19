class FootBall {
  goals: number;
  kicks: number;
  powerkicks: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.goals = data?.fb_goals || 0;
    this.kicks = data?.fb_kicks || 0;
    this.powerkicks = data?.fb_powerkicks || 0;
    this.wins = data?.fb_wins || 0;
  }
}

export default FootBall;
