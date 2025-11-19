class EasterSimulator {
  eggsFound: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.eggsFound = data?.eggs_found_easter_simulator || 0;
    this.wins = data?.wins_easter_simulator || 0;
  }
}

export default EasterSimulator;
