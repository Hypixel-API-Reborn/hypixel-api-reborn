import SkyBlockMemberDungeonsFloorRun from './SkyBlockMemberDungeonsFloorRun.js';

class SkyBlockMemberDungeonsFloor {
  timesPlayed: number;
  bestRuns: SkyBlockMemberDungeonsFloorRun[];
  bestScore: number;
  mobsKilled: number;
  mostMobsKilled: number;
  mostDamageBerserk: number;
  mostDamageMage: number;
  mostDamageHealer: number;
  mostDamageArcher: number;
  mostDamageTank: number;
  mostHealing: number;
  watcherKills: number;
  fastestTimeS: number;
  fastestTimeSPlus: number;
  constructor(data: Record<string, any>, floorNumber: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7') {
    this.timesPlayed = data?.tier_completions?.[floorNumber] || 0;
    this.bestRuns = (data?.best_runs?.[floorNumber] || []).map(
      (run: Record<string, number | string>) => new SkyBlockMemberDungeonsFloorRun(run)
    );
    this.bestScore = data?.best_score?.[floorNumber] || 0;
    this.mobsKilled = data?.mobs_killed?.[floorNumber] || 0;
    this.mostMobsKilled = data?.most_mobs_killed?.[floorNumber] || 0;
    this.mostDamageBerserk = data?.most_damage_berserk?.[floorNumber] || 0;
    this.mostDamageMage = data?.most_damage_mage?.[floorNumber] || 0;
    this.mostDamageHealer = data?.most_damage_healer?.[floorNumber] || 0;
    this.mostDamageArcher = data?.most_damage_archer?.[floorNumber] || 0;
    this.mostDamageTank = data?.most_damage_tank?.[floorNumber] || 0;
    this.mostHealing = data?.most_healing?.[floorNumber] || 0;
    this.watcherKills = data?.watcher_kills?.[floorNumber] || 0;
    this.fastestTimeS = data?.fastest_time_s?.[floorNumber] || 0;
    this.fastestTimeSPlus = data?.fastest_time_s_plus?.[floorNumber] || 0;
  }

  toString(): number {
    return this.timesPlayed;
  }
}

export default SkyBlockMemberDungeonsFloor;
