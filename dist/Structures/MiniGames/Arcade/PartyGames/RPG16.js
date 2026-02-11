import PartyGamesGame from './PartyGamesGame.js';
class RPG16 extends PartyGamesGame {
    constructor(data) {
        super(data, 'rpg_16');
        this.bestScore = data?.rpg_16_kills_best_score_party || 0;
    }
}
export default RPG16;
//# sourceMappingURL=RPG16.js.map