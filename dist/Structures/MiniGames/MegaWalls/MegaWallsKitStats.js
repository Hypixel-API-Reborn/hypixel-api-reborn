import Divide from '../../../Utils/Divide.js';
import MegaWallsModeStats from './MegaWallsModeStats.js';
class MegaWallsKitStats {
    kills;
    assists;
    deaths;
    KDR;
    wins;
    losses;
    WLR;
    finalKills;
    finalAssists;
    finalDeaths;
    FKDR;
    playedGames;
    witherDamage;
    defenderKills;
    walked;
    blocksPlaced;
    blocksBroken;
    meleeKills;
    damageDealt;
    faceOff;
    casualBrawl;
    constructor(data, kit) {
        this.kills = data?.[`${kit}_kills`] || 0;
        this.assists = data?.[`${kit}_assists`] || 0;
        this.deaths = data?.[`${kit}_deaths`] || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.[`${kit}_wins`] || 0;
        this.losses = data?.[`${kit}_losses`] || 0;
        this.WLR = Divide(this.wins, this.losses);
        this.finalKills = data?.[`${kit}_final_kills`] || 0;
        this.finalAssists = data?.[`${kit}_final_assists`] || 0;
        this.finalDeaths = data?.[`${kit}_final_deaths`] || 0;
        this.FKDR = Divide(this.finalKills, this.finalDeaths);
        this.playedGames = data?.[`${kit}_games_played`] || 0;
        this.witherDamage = data?.[`${kit}_wither_damage`] || 0;
        this.defenderKills = data?.[`${kit}_defender_kills`] || 0;
        this.walked = data?.[`${kit}_meters_walked`] || 0;
        this.blocksPlaced = data?.[`${kit}_blocks_placed`] || 0;
        this.blocksBroken = data?.[`${kit}_blocks_broken`] || 0;
        this.meleeKills = data?.[`${kit}_kills_melee`] || 0;
        this.damageDealt = data?.[`${kit}_damage_dealt`] || 0;
        this.faceOff = new MegaWallsModeStats(data, 'face_off', kit);
        this.casualBrawl = new MegaWallsModeStats(data, 'gvg', kit);
    }
}
export default MegaWallsKitStats;
//# sourceMappingURL=MegaWallsKitStats.js.map