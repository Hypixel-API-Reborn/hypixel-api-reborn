class GrinchSimulator {
    gifts;
    giftsTourney;
    giftsTourneyGrinchSimulator1;
    lossesTourney;
    lossesTourneyGrinchSimulator1;
    wins;
    winsTourney;
    winsTourneyGrinchSimulator1;
    constructor(data) {
        this.gifts = data?.gifts_grinch_simulator_v2 || 0;
        this.giftsTourney = data?.gifts_grinch_simulator_v2_tourney || 0;
        this.giftsTourneyGrinchSimulator1 = data?.gifts_grinch_simulator_v2_tourney_grinch_simulator_1 || 0;
        this.lossesTourney = data?.losses_grinch_simulator_v2_tourney || 0;
        this.lossesTourneyGrinchSimulator1 = data?.losses_grinch_simulator_v2_tourney_grinch_simulator_1 || 0;
        this.wins = data?.wins_grinch_simulator_v2 || 0;
        this.winsTourney = data?.wins_grinch_simulator_v2_tourney || 0;
        this.winsTourneyGrinchSimulator1 = data?.wins_grinch_simulator_v2_tourney_grinch_simulator_1 || 0;
    }
}
export default GrinchSimulator;
//# sourceMappingURL=GrinchSimulator.js.map