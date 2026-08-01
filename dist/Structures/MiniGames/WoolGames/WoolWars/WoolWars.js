import Divide from '../../../../Utils/Divide.js';
import WoolWarsClass from './WoolWarsClass.js';
import WoolWarsSettings from './WoolWarsSettings.js';
class WoolWars {
    selectedClass;
    kills;
    assists;
    deaths;
    killDeathRatio;
    gamesPlayed;
    wins;
    losses;
    winLossRatio;
    woolPlaced;
    blocksBroken;
    placeBreakRatio;
    powerupsGotten;
    settings;
    assault;
    tank;
    golem;
    swordsman;
    engineer;
    archer;
    constructor(data) {
        this.selectedClass = data?.selected_class || 'None';
        this.kills = data?.stats?.kills || 0;
        this.assists = data?.stats?.assists || 0;
        this.deaths = data?.stats?.deaths || 0;
        this.killDeathRatio = Divide(this.kills, this.deaths);
        this.gamesPlayed = data?.stats?.games_played || 0;
        this.wins = data?.stats?.wins || 0;
        this.losses = this.gamesPlayed - this.wins;
        this.winLossRatio = Divide(this.wins, this.losses);
        this.woolPlaced = data?.stats?.wool_placed || 0;
        this.blocksBroken = data?.stats?.blocks_broken || 0;
        this.placeBreakRatio = Divide(this.woolPlaced, this.blocksBroken);
        this.powerupsGotten = data?.powerups_gotten || 0;
        this.settings = new WoolWarsSettings(data?.settings ?? {});
        this.assault = new WoolWarsClass(data, 'ASSAULT');
        this.tank = new WoolWarsClass(data, 'TANK');
        this.golem = new WoolWarsClass(data, 'GOLEM');
        this.swordsman = new WoolWarsClass(data, 'SWORDSMAN');
        this.engineer = new WoolWarsClass(data, 'ENGINEER');
        this.archer = new WoolWarsClass(data, 'ARCHER');
    }
}
export default WoolWars;
//# sourceMappingURL=WoolWars.js.map