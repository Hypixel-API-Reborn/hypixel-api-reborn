class GrinchSimulator {
  gifts: number;
  giftsTourney: number;
  giftsTourneyGrinchSimulator1: number;
  lossesTourney: number;
  lossesTourneyGrinchSimulator1: number;
  wins: number;
  winsTourney: number;
  winsTourneyGrinchSimulator1: number;
  constructor(data: Record<string, any>) {
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
