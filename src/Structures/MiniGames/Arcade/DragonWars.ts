class DragonWars {
  kills: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.kills_dragonwars2 || 0;
    this.wins = data?.wins_dragonwars2 || 0;
  }
}

export default DragonWars;
