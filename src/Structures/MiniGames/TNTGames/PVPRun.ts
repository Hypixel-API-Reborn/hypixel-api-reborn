import Divide from '../../../Utils/Divide.js';
import type { ColorString } from '../../../Types/Color.js';

class PVPRun {
  wins: number;
  bestTime: number;
  kills: number;
  deaths: number;
  KDR: number;
  regeneration: number;
  notoriety: number;
  fortitude: number;
  doubleJumps: number;
  prefixColor: ColorString | 'Rainbow';
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_pvprun || 0;
    this.bestTime = data?.record_pvprun || 0;
    this.kills = data?.kills_pvprun || 0;
    this.deaths = data?.deaths_pvprun || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.regeneration = data?.new_pvprun_regeneration || 0;
    this.notoriety = data?.new_pvprun_notoriety || 0;
    this.fortitude = data?.new_pvprun_fortitude || 0;
    this.doubleJumps = data?.new_pvprun_double_jumps || 0;
    this.prefixColor = data?.prefix_pvprun || '';
  }
}

export default PVPRun;
