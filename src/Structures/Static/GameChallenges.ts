import Challenge from './Challenge.js';

class GameChallenges {
  category: string;
  challenges: Challenge[];
  constructor(name: string, data: Record<string, any>[]) {
    this.category = name;
    this.challenges = data.map((challenge) => new Challenge(challenge));
  }
}

export default GameChallenges;
