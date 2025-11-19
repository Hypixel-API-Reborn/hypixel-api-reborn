class ScubaSimulator {
  itemsFound: number;
  totalPoints: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.itemsFound = data?.items_found_scuba_simulator || 0;
    this.totalPoints = data?.total_points_scuba_simulator || 0;
    this.wins = data?.wins_scuba_simulator || 0;
  }
}

export default ScubaSimulator;
