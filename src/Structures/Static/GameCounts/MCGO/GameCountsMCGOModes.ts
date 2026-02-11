class GameCountsMCGOModes {
  normal: number;
  gungame: number;
  deathmatch: number;
  constructor(data: Record<string, any>) {
    this.normal = data?.normal || 0;
    this.gungame = data?.gungame || 0;
    this.deathmatch = data?.deathmatch || 0;
  }
}

export default GameCountsMCGOModes;
