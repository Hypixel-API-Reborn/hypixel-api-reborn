class MiniWalls {
    arrowsHit;
    arrowsHitTourney0;
    arrowsShot;
    arrowsShotTourney0;
    deaths;
    deathsTourney0;
    finalKills;
    finalKillsTourney0;
    kills;
    killsTourney0;
    inventoryLayout;
    wins;
    winsTourney0;
    witherDamage;
    witherDamageTourney0;
    witherKills;
    witherKillsTourney0;
    constructor(data) {
        this.arrowsHit = data?.arrows_hit_mini_walls || 0;
        this.arrowsHitTourney0 = data?.arrows_hit_tourney_mini_walls_0 || 0;
        this.arrowsShot = data?.arrows_shot_mini_walls || 0;
        this.arrowsShotTourney0 = data?.arrows_shot_tourney_mini_walls_0 || 0;
        this.deaths = data?.deaths_mini_walls || 0;
        this.deathsTourney0 = data?.deaths_tourney_mini_walls_0 || 0;
        this.finalKills = data?.final_kills_mini_walls || 0;
        this.finalKillsTourney0 = data?.final_kills_tourney_mini_walls_0 || 0;
        this.kills = data?.kills_mini_walls || 0;
        this.killsTourney0 = data?.kills_tourney_mini_walls_0 || 0;
        this.inventoryLayout = data?.mini_walls_inventory_layout || {};
        this.wins = data?.wins_mini_walls || 0;
        this.winsTourney0 = data?.wins_tourney_mini_walls_0 || 0;
        this.witherDamage = data?.wither_damage_mini_walls || 0;
        this.witherDamageTourney0 = data?.wither_damage_tourney_mini_walls_0 || 0;
        this.witherKills = data?.wither_kills_mini_walls || 0;
        this.witherKillsTourney0 = data?.wither_kills_tourney_mini_walls_0 || 0;
    }
}
export default MiniWalls;
//# sourceMappingURL=MiniWalls.js.map