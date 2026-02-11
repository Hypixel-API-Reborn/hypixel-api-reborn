import ZombiesMapMode from './ZombiesMapMode.js';
function minPositive(...values) {
    const positives = values.filter((v) => v > 0);
    return positives.length > 0 ? Math.min(...positives) : 0;
}
class ZombiesMap {
    bestRound;
    deaths;
    doorsOpened;
    fastestTime10;
    fastestTime20;
    fastestTime30;
    playersRevived;
    timesKnockedDown;
    totalRoundsSurvived;
    windowsRepaired;
    wins;
    zombieKills;
    normal;
    hard;
    rip;
    constructor(data, map, hasModes = false) {
        this.bestRound = data?.[`best_round_zombies_${map}`] || 0;
        this.deaths = data?.[`deaths_zombies_${map}`] || 0;
        this.doorsOpened = data?.[`doors_opened_zombies_${map}`] || 0;
        this.playersRevived = data?.[`players_revived_zombies_${map}`] || 0;
        this.timesKnockedDown = data?.[`times_knocked_down_zombies_${map}`] || 0;
        this.totalRoundsSurvived = data?.[`total_rounds_survived_zombies_${map}`] || 0;
        this.windowsRepaired = data?.[`windows_repaired_zombies_${map}`] || 0;
        this.wins = data?.[`wins_zombies_${map}`] || 0;
        this.zombieKills = data?.[`zombie_kills_zombies_${map}`] || 0;
        if (hasModes) {
            this.normal = new ZombiesMapMode(data, map, 'normal');
            this.hard = new ZombiesMapMode(data, map, 'hard');
            this.rip = new ZombiesMapMode(data, map, 'rip');
            this.fastestTime10 = minPositive(this.normal.fastestTime10, this.hard.fastestTime10, this.rip.fastestTime10);
            this.fastestTime20 = minPositive(this.normal.fastestTime20, this.hard.fastestTime20, this.rip.fastestTime20);
            this.fastestTime30 = minPositive(this.normal.fastestTime30, this.hard.fastestTime30, this.rip.fastestTime30);
        }
        else {
            this.fastestTime10 = data?.[`fastest_time_10_zombies_${map}_normal`] || 0;
            this.fastestTime20 = data?.[`fastest_time_20_zombies_${map}_normal`] || 0;
            this.fastestTime30 = data?.[`fastest_time_30_zombies_${map}_normal`] || 0;
        }
    }
}
export default ZombiesMap;
//# sourceMappingURL=ZombiesMap.js.map