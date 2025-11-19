class SantaSimulator {
  delivered: number;
  spotted: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.delivered = data?.delivered_santa_simulator || 0;
    this.spotted = data?.spotted_santa_simulator || 0;
    this.wins = data?.wins_santa_simulator || 0;
  }
}

export default SantaSimulator;
