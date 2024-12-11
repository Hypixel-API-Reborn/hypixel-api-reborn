class DragonWars {
  wins: number;
  kills: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_dragonwars2 || 0;
    this.kills = data?.kills_dragonwars2 || 0;
  }
}

export default DragonWars;
