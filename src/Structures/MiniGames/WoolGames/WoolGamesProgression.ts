class WoolGamesProgression {
  availableLayers: number;
  xp: number;
  exactLevel: number;
  level: number;
  constructor(data: Record<string, any>) {
    this.availableLayers = data?.available_layers ?? 0;
    this.xp = data?.experience ?? 0;
    this.exactLevel = this.convertXPToLevel(this.xp);
    this.level = Math.floor(this.exactLevel);
  }

  convertXPToLevel(exp: number): number {
    const minimalExp = [0, 1e3, 3e3, 6e3, 1e4, 15e3];
    const baseLevel = minimalExp?.length;
    const baseExp: number = minimalExp[minimalExp?.length - 1] ?? 0;
    const expToLevel100 = 49e4;
    if (exp < baseExp) return minimalExp?.findIndex((x) => exp < x);
    const theoreticalLevel = (exp - baseExp) / 5e3 + baseLevel;
    if (theoreticalLevel > 100) return 100 + this.convertXPToLevel(exp - expToLevel100);
    return theoreticalLevel;
  }
}

export default WoolGamesProgression;
