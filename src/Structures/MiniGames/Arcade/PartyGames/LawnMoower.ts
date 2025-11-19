import PartyGamesGame from './PartyGamesGame.ts';

class LawnMoower extends PartyGamesGame {
  constructor(data: Record<string, any>) {
    super(data, 'lawn_moower');
    this.bestScore = data?.lawn_moower_mowed_best_score_party || 0;
    this.totalScore = data?.lawn_moower_mowed_total_score_party || 0;
  }
}

export default LawnMoower;
