class GameCountsPitModes {
  PIT: number;
  constructor(data: Record<string, any>) {
    this.PIT = data?.PIT || 0;
  }
}

export default GameCountsPitModes;
