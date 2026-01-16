import type { ArcadeZombiesDifficulty, ArcadeZombiesMaps } from '../../../../Types/Player.js';

class ZombiesMapMode {
  bestRound: number;
  deaths: number;
  doorsOpened: number;
  fastestTime10: number;
  fastestTime20: number;
  fastestTime30: number;
  playersRevived: number;
  timesKnockedDown: number;
  totalRoundsSurvived: number;
  windowsRepaired: number;
  wins: number;
  zombieKills: number;
  constructor(data: Record<string, any>, map: ArcadeZombiesMaps, mode: ArcadeZombiesDifficulty) {
    this.bestRound = data?.[`best_round_zombies_${map}_${mode}`] || 0;
    this.deaths = data?.[`deaths_zombies_${map}_${mode}`] || 0;
    this.doorsOpened = data?.[`doors_opened_zombies_${map}_${mode}`] || 0;
    this.fastestTime10 = data?.[`fastest_time_10_zombies_${map}_${mode}`] || 0;
    this.fastestTime20 = data?.[`fastest_time_20_zombies_${map}_${mode}`] || 0;
    this.fastestTime30 = data?.[`fastest_time_30_zombies_${map}_${mode}`] || 0;
    this.playersRevived = data?.[`players_revived_zombies_${map}_${mode}`] || 0;
    this.timesKnockedDown = data?.[`times_knocked_down_zombies_${map}_${mode}`] || 0;
    this.totalRoundsSurvived = data?.[`total_rounds_survived_zombies_${map}_${mode}`] || 0;
    this.windowsRepaired = data?.[`windows_repaired_zombies_${map}_${mode}`] || 0;
    this.wins = data?.[`wins_zombies_${map}_${mode}`] || 0;
    this.zombieKills = data?.[`zombie_kills_zombies_${map}_${mode}`] || 0;
  }
}

export default ZombiesMapMode;
