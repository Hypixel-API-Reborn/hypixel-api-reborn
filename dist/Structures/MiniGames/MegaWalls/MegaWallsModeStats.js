import Divide from '../../../Utils/Divide.js';
class MegaWallsModeStats {
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
    constructor(data, mode, kit) {
        const kitName = kit ? `${kit}_` : '';
        this.kills = data?.[`${kitName}kills_${mode}`] || 0;
        this.assists = data?.[`${kitName}assists_${mode}`] || 0;
        this.deaths = data?.[`${kitName}deaths_${mode}`] || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.[`${kitName}wins_${mode}`] || 0;
        this.losses = data?.[`${kitName}losses_${mode}`] || 0;
        this.WLR = Divide(this.wins, this.losses);
        this.finalKills = data?.[`${kitName}final_kills_${mode}`] || 0;
        this.finalAssists = data?.[`${kitName}final_assists_${mode}`] || 0;
        this.finalDeaths = data?.[`${kitName}final_deaths_${mode}`] || 0;
        this.FKDR = Divide(this.finalKills, this.finalDeaths);
        this.playedGames = data?.[`${kitName}games_played_${mode}`] || 0;
        this.witherDamage = data?.[`${kitName}wither_damage_${mode}`] || 0;
        this.defenderKills = data?.[`${kitName}defender_kills_${mode}`] || 0;
        this.walked = data?.[`${kitName}meters_walked_${mode}`] || 0;
        this.blocksPlaced = data?.[`${kitName}blocks_placed_${mode}`] || 0;
        this.blocksBroken = data?.[`${kitName}blocks_broken_${mode}`] || 0;
        this.meleeKills = data?.[`${kitName}kills_melee_${mode}`] || 0;
        this.damageDealt = data?.[`${kitName}damage_dealt_${mode}`] || 0;
    }
}
export default MegaWallsModeStats;
//# sourceMappingURL=MegaWallsModeStats.js.map