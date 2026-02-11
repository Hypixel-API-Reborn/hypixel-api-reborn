class GameCountsWalls3Modes {
  standard: number;
  faceOff: number;
  constructor(data: Record<string, any>) {
    this.standard = data?.standard || 0;
    this.faceOff = data?.face_off || 0;
  }
}

export default GameCountsWalls3Modes;
