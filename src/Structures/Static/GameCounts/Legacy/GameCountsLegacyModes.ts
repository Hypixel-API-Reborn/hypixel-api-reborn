class GameCountsLegacyModes {
  vampireZ: number;
  walls: number;
  quakecraft: number;
  gingerbread: number;
  paintball: number;
  arena: number;
  constructor(data: Record<string, any>) {
    this.vampireZ = data?.VAMPIREZ || 0;
    this.walls = data?.WALLS || 0;
    this.quakecraft = data?.QUAKECRAFT || 0;
    this.gingerbread = data?.GINGERBREAD || 0;
    this.paintball = data?.PAINTBALL || 0;
    this.arena = data?.ARENA || 0;
  }
}

export default GameCountsLegacyModes;
