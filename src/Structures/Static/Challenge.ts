import type { ChallengeReward } from '../../Types/Static.js';

class Challenge {
  id: string;
  name: string;
  rewards: ChallengeReward[];
  constructor(data: Record<string, any>) {
    this.id = data.id || 'UNKNOWN';
    this.name = data.name || 'UNKNOWN';
    this.rewards = data.rewards || [];
  }
}

export default Challenge;
