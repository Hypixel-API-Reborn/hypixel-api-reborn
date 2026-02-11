class GameContsReplayModes {
  base: number;
  constructor(data: Record<string, any>) {
    this.base = data?.BASE || 0;
  }
}

export default GameContsReplayModes;
