class GameCountsUHCModes {
  teams: number;
  solo: number;
  brawlDuo: number;
  constructor(data: Record<string, any>) {
    this.teams = data?.TEAMS || 0;
    this.solo = data?.SOLO || 0;
    this.brawlDuo = data?.BRAWL_DUO || 0;
  }
}

export default GameCountsUHCModes;
