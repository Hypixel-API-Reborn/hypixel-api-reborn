import Divide from '../../../Utils/Divide.js';
import { monthAB, weekAB } from '../../../Utils/Oscillation.js';

class GalaxyWars {
  wins: number;
  kills: number;
  deaths: number;
  KDR: number;
  shotsFired: number;
  weeklyKills: number;
  monthlyKills: number;
  attackerKills: number;
  defenderKills: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.sw_game_wins || 0;
    this.kills = data?.sw_kills || 0;
    this.deaths = data?.sw_deaths || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.shotsFired = data?.sw_shots_fired || 0;
    this.weeklyKills = parseInt(data?.[`weekly_kills_${weekAB()}`] || 0, 10);
    this.monthlyKills = parseInt(data?.[`monthly_kills_${monthAB()}`] || 0, 10);
    this.attackerKills = data?.sw_rebel_kills || 0;
    this.defenderKills = data?.sw_empire_kills || 0;
  }
}

export default GalaxyWars;
