class BedWarsSlumberQuestGamblerGeorge {
    betAmount;
    gambleGamesWon;
    lostBet;
    lostBetTime;
    shouldReward;
    wonLastGame;
    constructor(data) {
        this.betAmount = data?.bet_amount || 0;
        this.gambleGamesWon = data?.gamble_games_won || 0;
        this.lostBet = data?.lost_bet || false;
        this.lostBetTime = data?.lost_bet_time || 0;
        this.shouldReward = data?.should_reward || false;
        this.wonLastGame = data?.won_last_game || false;
    }
}
export default BedWarsSlumberQuestGamblerGeorge;
//# sourceMappingURL=BedWarsSlumberQuestGamblerGeorge.js.map