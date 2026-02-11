class GameCountsBasicModes {
  soloNormal: number;
  teamNormal: number;
  constructor(data: Record<string, any>) {
    this.soloNormal = data?.solo_normal || 0;
    this.teamNormal = data?.team_normal || 0;
  }
}

export default GameCountsBasicModes;
