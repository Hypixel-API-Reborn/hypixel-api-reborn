class GameCountsBattleGroundMods {
  ctfMini: number;
  domination: number;
  teamDeathmatch: number;
  constructor(data: Record<string, any>) {
    this.ctfMini = data?.ctf_mini || 0;
    this.domination = data?.domination || 0;
    this.teamDeathmatch = data?.team_deathmatch || 0;
  }
}

export default GameCountsBattleGroundMods;
