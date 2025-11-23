import type { BedWarsChallengeId } from '../../../../Types/Player.js';

class BedWarsChallenge {
  bestTime: number;
  timesCompleted: number;
  constructor(data: Record<string, any>, challenge: BedWarsChallengeId) {
    this.bestTime = data?.challenge?.[`bw_challenge_${challenge}_best_time`] || 0;
    this.timesCompleted = data?.[`bw_challenge_${challenge}`] || 0;
  }
}

export default BedWarsChallenge;
