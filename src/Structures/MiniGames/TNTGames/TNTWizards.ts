import Divide from '../../../Utils/Divide.js';
import type { ColorString } from '../../../Types/Color.js';

class TNTWizards {
  wins: number;
  kills: number;
  assists: number;
  deaths: number;
  KDR: number;
  points: number;
  kineticHealing: number;
  airTime: number;
  prefix: ColorString | 'Rainbow';
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_capture || 0;
    this.kills = data?.kills_capture || 0;
    this.assists = data?.assists_capture || 0;
    this.deaths = data?.deaths_capture || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.points = data?.points_capture || 0;
    this.kineticHealing = data?.kinetic_healing_capture || 0;
    this.airTime = data?.air_time_capture || 0;
    this.prefix = data?.prefix_capture || '';
  }
}

export default TNTWizards;
