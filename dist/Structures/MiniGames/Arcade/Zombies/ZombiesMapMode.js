class ZombiesMapMode {
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
    constructor(data, map, mode) {
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
//# sourceMappingURL=ZombiesMapMode.js.map