class HoleInTheWall {
  wins: number;
  rounds: number;
  scoreRecordFinals: number;
  scoreRecordNormal: number;
  scoreRecordOverall: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_hole_in_the_wall || 0;
    this.rounds = data?.rounds_hole_in_the_wall || 0;
    this.scoreRecordFinals = data?.hitw_record_f || 0;
    this.scoreRecordNormal = data?.hitw_record_q || 0;
    this.scoreRecordOverall = this.scoreRecordFinals + this.scoreRecordNormal;
  }
}

export default HoleInTheWall;
