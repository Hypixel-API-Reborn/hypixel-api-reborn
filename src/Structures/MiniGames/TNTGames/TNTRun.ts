import type { ColorString } from '../../../Types/Color.js';

class TNTRun {
  wins: number;
  bestTime: number;
  deaths: number;
  slownessPotions: number;
  speedPotions: number;
  doubleJumps: number;
  prefix: ColorString | 'Rainbow';
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_tntrun || 0;
    this.bestTime = data?.record_tntrun || 0;
    this.deaths = data?.deaths_tntrun || 0;
    this.slownessPotions = data?.new_tntrun_slowness_potions || 0;
    this.speedPotions = data?.new_tntrun_speed_potions || 0;
    this.doubleJumps = data?.new_tntrun_double_jumps || 0;
    this.prefix = data?.prefix_tntrun || '';
  }
}

export default TNTRun;
