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
    if (1000 <= points) {
      return 'S';
    } else if (800 <= points) {
      return 'A';
    } else if (600 <= points) {
      return 'B';
    } else if (400 <= points) {
      return 'C';
    } else if (200 <= points) {
      return 'D';
    }
    return 'F';
  }
}

export default SkyBlockMemberCrimsonIsleDojoMinigame;
