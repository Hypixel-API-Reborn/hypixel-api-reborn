import { monthAB, weekAB } from '../../../Utils/Oscillation.js';
class GalaxyWars {
    deaths;
    empireKills;
    gameWins;
    kills;
    monthlyKills;
    monthlyKillsA;
    monthlyKillsB;
    rebelKills;
    shotsFired;
    weeklyKills;
    weeklyKillsA;
    weeklyKillsB;
    constructor(data) {
        this.deaths = data?.sw_deaths || 0;
        this.empireKills = data?.sw_empire_kills || 0;
        this.gameWins = data?.sw_game_wins || 0;
        this.kills = data?.sw_kills || 0;
        this.monthlyKills = parseInt(data?.[`sw_monthly_kills_${monthAB()}`] || 0, 10);
        this.monthlyKillsA = data?.sw_monthly_kills_a || 0;
        this.monthlyKillsB = data?.sw_monthly_kills_b || 0;
        this.rebelKills = data?.sw_rebel_kills || 0;
        this.shotsFired = data?.sw_shots_fired || 0;
        this.weeklyKills = parseInt(data?.[`sw_weekly_kills_${weekAB()}`] || 0, 10);
        this.weeklyKillsA = data?.sw_weekly_kills_a || 0;
        this.weeklyKillsB = data?.sw_weekly_kills_b || 0;
    }
}
export default GalaxyWars;
//# sourceMappingURL=GalaxyWars.js.map