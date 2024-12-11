import Challenge from './Challenge.js';

class GameChallenges {
  category: string;
  challenges: Challenge[];
  constructor(name: string, data: { id: string; name: string; rewards: { type: string; amount: number }[] }[]) {
    this.category = name;
    this.challenges = data.map((challenge) => new Challenge(challenge));
  }
}

export default GameChallenges;
