import Divide from '../../../Utils/Divide.js';
class SheepWars {
    wins;
    kills;
    killsVoid;
    killsBow;
    killsExplosive;
    deaths;
    deathsVoid;
    deathsMelee;
    deathsExplosive;
    KDRatio;
    losses;
    WLRatio;
    gamesPlayed;
    damageDealt;
    sheepThrown;
    magicWoolHit;
    constructor(data) {
        this.wins = data?.stats?.wins || 0;
        this.kills = data?.stats?.kills || 0;
        this.killsVoid = data?.stats?.kills_void || 0;
        this.killsBow = data?.stats?.kills_bow || 0;
        this.killsExplosive = data?.stats?.kills_explosive || 0;
        this.deaths = data?.stats?.deaths || 0;
        this.deathsVoid = data?.stats?.deaths_void || 0;
        this.deathsMelee = data?.stats?.deaths_melee || 0;
        this.deathsExplosive = data?.stats?.deaths_explosive || 0;
        this.KDRatio = Divide(this.wins, this.deaths);
        this.losses = data?.stats?.losses || 0;
        this.WLRatio = Divide(this.wins, this.losses);
        this.gamesPlayed = data?.stats?.games_played || 0;
        this.damageDealt = data?.stats?.damage_dealt || 0;
        this.sheepThrown = data?.stats?.sheep_thrown || 0;
        this.magicWoolHit = data?.stats?.magic_wool_hit || 0;
    }
}
export default SheepWars;
//# sourceMappingURL=SheepWars.js.map