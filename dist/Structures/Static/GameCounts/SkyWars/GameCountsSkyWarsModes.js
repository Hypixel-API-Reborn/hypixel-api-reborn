import GameCountsBasicModes from "../GameCountsBasicModes.js";
class GameCountsSkyWarsModes extends GameCountsBasicModes {
    soloInsaneLucky;
    soloInsaneSlime;
    teamsInsaneSlime;
    teamsInsaneRush;
    teamsInsaneLucky;
    soloInsaneHuntersVsBeasts;
    soloInsaneTntMadness;
    megaDoubles;
    miniNormal;
    soloInsaneRush;
    soloInsane;
    teamsInsaneTntMadness;
    constructor(data) {
        super(data);
        this.soloInsaneLucky = data?.solo_insane_lucky || 0;
        this.soloInsaneSlime = data?.solo_insane_slime || 0;
        this.teamsInsaneSlime = data?.teams_insane_slime || 0;
        this.teamsInsaneRush = data?.teams_insane_rush || 0;
        this.teamsInsaneLucky = data?.teams_insane_lucky || 0;
        this.soloInsaneHuntersVsBeasts = data?.solo_insane_hunters_vs_beasts || 0;
        this.soloInsaneTntMadness = data?.solo_insane_tnt_madness || 0;
        this.megaDoubles = data?.mega_doubles || 0;
        this.miniNormal = data?.mini_normal || 0;
        this.soloInsaneRush = data?.solo_insane_rush || 0;
        this.soloInsane = data?.solo_insane || 0;
        this.teamsInsaneTntMadness = data?.teams_insane_tnt_madness || 0;
    }
}
export default GameCountsSkyWarsModes;
//# sourceMappingURL=GameCountsSkyWarsModes.js.map