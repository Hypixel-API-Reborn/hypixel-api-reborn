class BuildBattleLastWin {
  guessTheBuildAt: Date | null;
  soloNormalAt: Date | null;
  soloProAt: Date | null;
  speedBuildersAt: Date | null;
  teamsNormalAt: Date | null;
  constructor(data: Record<string, any>) {
    this.guessTheBuildAt = data?.GUESS_THE_BUILD ? new Date(data?.GUESS_THE_BUILD) : null;
    this.soloNormalAt = data?.SOLO_NORMAL ? new Date(data?.SOLO_NORMAL) : null;
    this.soloProAt = data?.SOLO_PRO ? new Date(data?.SOLO_PRO) : null;
    this.speedBuildersAt = data?.SPEED_BUILDERS ? new Date(data?.SPEED_BUILDERS) : null;
    this.teamsNormalAt = data?.TEAMS_NORMAL ? new Date(data?.TEAMS_NORMAL) : null;
  }
}

export default BuildBattleLastWin;
