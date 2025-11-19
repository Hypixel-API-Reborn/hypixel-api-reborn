class MiniWalls {
  arrowsHit: number;
  arrowsHitTourney0: number;
  arrowsShot: number;
  arrowsShotTourney0: number;
  deaths: number;
  deathsTourney0: number;
  finalKills: number;
  finalKillsTourney0: number;
  kills: number;
  killsTourney0: number;
  inventoryLayout: Record<string, number>;
  wins: number;
  winsTourney0: number;
  witherDamage: number;
  witherDamageTourney0: number;
  witherKills: number;
  witherKillsTourney0: number;
  constructor(data: Record<string, any>) {
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
