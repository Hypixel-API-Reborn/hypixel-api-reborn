import Divide from '../../../Utils/Divide.js';
import type { BlitzSurvivalGamesKits } from '../../../Types/Player.js';

class BlitzSurvivalGamesKit {
  level: number;
  exp: number;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  arrowsShot: number;
  arrowsHit: number;
  bowAccuracy: number;
  damage: number;
  damageTaken: number;
  potionsDrunk: number;
  potionsThrown: number;
  playTime: number;
  mobsSpawned: number;
  chestsOpened: number;
  constructor(data: Record<string, any>, kitName: BlitzSurvivalGamesKits) {
    this.level = data?.[kitName] || 0;
    this.exp = data?.[`exp_${kitName}`] || 0;
    this.kills = data?.[`kills_${kitName}`] || 0;
    this.deaths = data?.[`deaths_${kitName}`] || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.[`wins_${kitName}`] || 0;
    this.gamesPlayed = data?.[`games_played_${kitName}`] || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = Divide(this.wins, this.losses);
    this.arrowsShot = data?.[`arrows_fired_${kitName}`] || 0;
    this.arrowsHit = data?.[`arrows_hit_${kitName}`] || 0;
    this.bowAccuracy = Divide(this.arrowsHit, this.arrowsShot);
    this.damage = data?.[`damage_${kitName}`] || 0;
    this.damageTaken = data?.[`damage_taken_${kitName}`] || 0;
    this.potionsDrunk = data?.[`potions_drunk_${kitName}`] || 0;
    this.potionsThrown = data?.[`potions_thrown_${kitName}`] || 0;
    this.playTime = data?.[`time_played_${kitName}`] || 0;
    this.mobsSpawned = data?.[`mobs_spawned_${kitName}`] || 0;
    this.chestsOpened = data?.[`chests_opened_${kitName}`] || 0;
  }
}

export default BlitzSurvivalGamesKit;
