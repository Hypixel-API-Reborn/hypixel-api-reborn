import Divide from '../../../../Utils/Divide.js';
import SheepWarsLayout from './SheepWarsLayout.js';
class SheepWars {
    wins;
    losses;
    winLossRatio;
    kills;
    deaths;
    killDeathRatio;
    killsVoid;
    deathsVoid;
    killDeathRatioVoid;
    killsBow;
    deathsBow;
    killDeathRatioBow;
    killsExplosive;
    deathsExplosive;
    killDeathRatioExplosive;
    killsMelee;
    deathsMelee;
    killDeathRatioMelee;
    magicWoolHit;
    damageDealt;
    sheepThrown;
    gamesPlayed;
    kit;
    layout;
    constructor(data) {
        this.wins = data?.stats?.wins || 0;
        this.losses = data?.stats?.losses || 0;
        this.winLossRatio = Divide(this.wins, this.losses);
        this.kills = data?.stats?.kills || 0;
        this.deaths = data?.stats?.deaths || 0;
        this.killDeathRatio = Divide(this.kills, this.deaths);
        this.killsVoid = data?.stats?.kills_void || 0;
        this.deathsVoid = data?.stats?.deaths_void || 0;
        this.killDeathRatioVoid = Divide(this.killsVoid, this.deathsVoid);
        this.killsBow = data?.stats?.kills_bow || 0;
        this.deathsBow = data?.stats?.deaths_bow || 0;
        this.killDeathRatioBow = Divide(this.killsBow, this.deathsBow);
        this.killsExplosive = data?.stats?.kills_explosive || 0;
        this.deathsExplosive = data?.stats?.deaths_explosive || 0;
        this.killDeathRatioExplosive = Divide(this.killsExplosive, this.deathsExplosive);
        this.killsMelee = data?.stats?.kills_melee || 0;
        this.deathsMelee = data?.stats?.deaths_melee || 0;
        this.killDeathRatioMelee = Divide(this.killsMelee, this.deathsMelee);
        this.magicWoolHit = data?.stats?.magic_wool_hit || 0;
        this.damageDealt = data?.stats?.damage_dealt || 0;
        this.sheepThrown = data?.stats?.sheep_thrown || 0;
        this.gamesPlayed = data?.stats?.games_played || 0;
        this.kit = data?.default_kit || 'None';
        this.layout = new SheepWarsLayout(data?.layout || {});
    }
}
export default SheepWars;
//# sourceMappingURL=SheepWars.js.map