import Divide from '../../../Utils/Divide.js';
import type { VampireZRoles } from '../../../Types/Player.js';

class VampireZRole {
  role: VampireZRoles;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  constructor(data: Record<string, any>, role: VampireZRoles) {
    this.role = role;
    this.kills = data?.[`${role}_kills`] || 0;
    this.deaths = data?.[`${role}_deaths`] || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.[`${role}_wins`] || 0;
  }
}

export default VampireZRole;
