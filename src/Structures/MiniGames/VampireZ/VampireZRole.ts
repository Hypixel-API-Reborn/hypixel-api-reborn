import { Divide } from '../../../Utils/index.js';
import type { VampireZRoleId } from '../../../Types/index.js';

class VampireZRole {
  role: VampireZRoleId;
  kills: number;
  deaths: number;
  killDeathRatio: number;
  wins: number;
  constructor(data: Record<string, any>, role: VampireZRoleId) {
    this.role = role;
    this.kills = data?.[`${role}_kills`] ?? 0;
    this.deaths = data?.[`${role}_deaths`] ?? 0;
    this.killDeathRatio = Divide(this.kills, this.deaths);
    this.wins = data?.[`${role}_wins`] ?? 0;
  }
}

export default VampireZRole;
