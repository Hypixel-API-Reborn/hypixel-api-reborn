class GameCountsGeneric {
  players: number;
  constructor(data: Record<string, any>) {
    this.players = data?.players || 0;
  }
}

export default GameCountsGeneric;
