import Divide from '../../../Utils/Divide.js';
class WoolWarsClass {
    wins;
    kills;
    assists;
    deaths;
    KDRatio;
    gamesPlayed;
    woolsPlaced;
    blocksBroken;
    placeBreakRatio;
    powerUps;
    constructor(data, classInput) {
        const className = classInput.toLowerCase();
        this.wins = data?.[className]?.wins || 0;
        this.kills = data?.[className]?.kills || 0;
        this.assists = data?.[className]?.assists || 0;
        this.deaths = data?.[className]?.deaths || 0;
        this.KDRatio = Divide(this.kills, this.deaths);
        this.gamesPlayed = data?.[className]?.games_played || 0;
        this.woolsPlaced = data?.[className]?.wool_placed || 0;
        this.blocksBroken = data?.[className]?.blocks_broken || 0;
        this.placeBreakRatio = Divide(this.woolsPlaced, this.blocksBroken);
        this.powerUps = data?.[className]?.powerups_gotten || 0;
    }
}
export default WoolWarsClass;
//# sourceMappingURL=WoolWarsClass.js.map