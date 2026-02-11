class GameCountsBuildBattleModes {
    soloNormalLatest;
    speedBuilders;
    guessTheBuild;
    teamsNormal;
    soloPro;
    soloNormal;
    constructor(data) {
        this.soloNormalLatest = data?.BUILD_BATTLE_SOLO_NORMAL_LATEST || 0;
        this.speedBuilders = data?.BUILD_BATTLE_SPEED_BUILDERS || 0;
        this.guessTheBuild = data?.BUILD_BATTLE_GUESS_THE_BUILD || 0;
        this.teamsNormal = data?.BUILD_BATTLE_TEAMS_NORMAL || 0;
        this.soloPro = data?.BUILD_BATTLE_SOLO_PRO || 0;
        this.soloNormal = data?.BUILD_BATTLE_SOLO_NORMAL || 0;
    }
}
export default GameCountsBuildBattleModes;
//# sourceMappingURL=GameCountsBuildBattleModes.js.map