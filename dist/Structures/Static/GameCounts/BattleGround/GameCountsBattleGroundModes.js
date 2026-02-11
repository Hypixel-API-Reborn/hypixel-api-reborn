class GameCountsBattleGroundMods {
    ctfMini;
    domination;
    teamDeathmatch;
    constructor(data) {
        this.ctfMini = data?.ctf_mini || 0;
        this.domination = data?.domination || 0;
        this.teamDeathmatch = data?.team_deathmatch || 0;
    }
}
export default GameCountsBattleGroundMods;
//# sourceMappingURL=GameCountsBattleGroundModes.js.map