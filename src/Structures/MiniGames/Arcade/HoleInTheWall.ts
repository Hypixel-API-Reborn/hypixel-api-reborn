import type { ArcadeHoleInTheWallColor } from '../../../Types/Player.js';

class HoleInTheWall {
  rounds: number;
  wins: number;
  color: ArcadeHoleInTheWallColor;
  recordF: number;
  recordQ: number;
  constructor(data: Record<string, any>) {
    this.rounds = data?.rounds_hole_in_the_wall || 0;
    this.wins = data?.wins_hole_in_the_wall || 0;
    this.color = data?.hitw_color || 'DEFAULT';
    this.recordF = data?.hitw_record_f || 0;
    this.recordQ = data?.hitw_record_q || 0;
  }
}

export default HoleInTheWall;
