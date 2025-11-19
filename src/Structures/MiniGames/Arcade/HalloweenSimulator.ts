class HalloweenSimulator {
  candyFound: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.candyFound = data?.candy_found_halloween_simulator || 0;
    this.wins = data?.wins_halloween_simulator || 0;
  }
}

export default HalloweenSimulator;
