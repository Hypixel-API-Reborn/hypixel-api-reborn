import PartyGamesGame from './PartyGamesGame.js';

class RPG16 extends PartyGamesGame {
  constructor(data: Record<string, any>) {
    super(data, 'rpg_16');
    this.bestScore = data?.rpg_16_kills_best_score_party || 0;
  }
}

export default RPG16;
