import Divide from '../../../../Utils/Divide.js';
import InventoryLayout from '../../Shared/InventoryLayout.js';
class WoolWarsClass {
    wins;
    kills;
    assists;
    deaths;
    killDeathRatio;
    gamesPlayed;
    woolsPlaced;
    blocksBroken;
    placeBreakRatio;
    powerUps;
    layout;
    constructor(data, className) {
        className = className.toLowerCase();
        this.wins = data?.[className]?.wins || 0;
        this.kills = data?.[className]?.kills || 0;
        this.assists = data?.[className]?.assists || 0;
        this.deaths = data?.[className]?.deaths || 0;
        this.killDeathRatio = Divide(this.kills, this.deaths);
        this.gamesPlayed = data?.[className]?.games_played || 0;
        this.woolsPlaced = data?.[className]?.wool_placed || 0;
        this.blocksBroken = data?.[className]?.blocks_broken || 0;
        this.placeBreakRatio = Divide(this.woolsPlaced, this.blocksBroken);
        this.powerUps = data?.[className]?.powerups_gotten || 0;
        this.layout = new InventoryLayout(data?.layouts?.[className]);
    }
}
export default WoolWarsClass;
//# sourceMappingURL=WoolWarsClass.js.map