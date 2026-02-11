import BedWarsBeds from './BedWarsBeds.js';
import BedWarsKillsDeaths from './BedWarsKillsDeaths/BedWarsKillsDeaths.js';
import BedWarsResourcesCollected from './BedWarsResourcesCollected.js';
import Divide from '../../../Utils/Divide.js';
import { ParseModeBefore } from "../../../Utils/ParseMode.js";
class BedWarsMode {
    resourcesCollected;
    kills;
    finals;
    beds;
    winstreak;
    wins;
    losses;
    winLossRatio;
    gamesPlayed;
    constructor(data, mode) {
        mode = ParseModeBefore(mode);
        this.resourcesCollected = new BedWarsResourcesCollected(data, mode);
        this.kills = new BedWarsKillsDeaths(data, mode);
        this.finals = new BedWarsKillsDeaths(data, mode, true);
        this.beds = new BedWarsBeds(data, mode);
        this.winstreak = data?.[`${mode}winstreak`] || 0;
        this.wins = data?.[`${mode}wins_bedwars`] || 0;
        this.losses = data?.[`${mode}losses_bedwars`] || 0;
        this.winLossRatio = Divide(this.wins, this.losses);
        this.gamesPlayed = data?.[`${mode}games_played_bedwars`] || 0;
    }
}
export default BedWarsMode;
//# sourceMappingURL=BedWarsMode.js.map