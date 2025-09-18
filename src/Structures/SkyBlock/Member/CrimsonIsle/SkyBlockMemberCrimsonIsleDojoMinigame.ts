import type { CrimsonIsleDojoRank } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberCrimsonIsleDojoMinigame {
  points: number;
  time: number;
  rank: CrimsonIsleDojoRank;
  constructor(data: Record<string, any>, type: string) {
    this.points = data?.[`dojo_points_${type}`] || 0;
    this.time = data?.[`dojo_time_${type}`] || 0;
    this.rank = this.getScore(this.points);
  }

  toString(): CrimsonIsleDojoRank {
    return this.rank;
  }

  private getScore(points: number): CrimsonIsleDojoRank {
    if (points >= 1000) {
      return 'S';
    } else if (points >= 800) {
      return 'A';
    } else if (points >= 600) {
      return 'B';
    } else if (points >= 400) {
      return 'C';
    } else if (points >= 200) {
      return 'D';
    }
    return 'F';
  }
}

export default SkyBlockMemberCrimsonIsleDojoMinigame;
