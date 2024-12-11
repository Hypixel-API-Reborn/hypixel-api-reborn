import Divide from '../../../Utils/Divide.js';
import type { MiniWallsKits } from '../../../Types/Player.js';

class MiniWalls {
  kit: MiniWallsKits | 'None';
  wins: number;
  kills: number;
  deaths: number;
  KDR: number;
  finalKills: number;
  witherKills: number;
  witherDamage: number;
  arrowsShot: number;
  arrowsHit: number;
  bowAccuracy: number;
  constructor(data: Record<string, any>) {
    this.kit = data?.miniwalls_activeKit || 'None';
    this.wins = data?.wins_mini_walls || 0;
    this.kills = data?.kills_mini_walls || 0;
    this.deaths = data?.deaths_mini_walls || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.finalKills = data?.final_kills_mini_walls || 0;
    this.witherKills = data?.wither_kills_mini_walls || 0;
    this.witherDamage = data?.wither_damage_mini_walls || 0;
    this.arrowsShot = data?.arrows_shot_mini_walls || 0;
    this.arrowsHit = data?.arrows_hit_mini_walls || 0;
    this.bowAccuracy = Divide(this.arrowsHit, this.arrowsShot);
  }
}

export default MiniWalls;
