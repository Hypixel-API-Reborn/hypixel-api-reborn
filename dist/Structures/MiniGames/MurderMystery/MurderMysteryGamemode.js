class MurderMysteryGamemode {
    alphaWins;
    bowKills;
    tokensPickedUp;
    deaths;
    detectiveWins;
    games;
    kills;
    lastOneAlive;
    longestTimeAsSurvivorSeconds;
    murdererWins;
    quickestDetectiveWinTimeSeconds;
    quickestMurdererWinTimeSeconds;
    quickestShowdownWinTimeSeconds;
    showdownPotg;
    suicides;
    survivorWins;
    totalTimeSurvivedSeconds;
    wasHero;
    wins;
    constructor(data, gamemode, map) {
        const key = `${gamemode}${map ? `_${map}` : ''}`;
        this.alphaWins = data?.[`alpha_wins_${key}`] || 0;
        this.bowKills = data?.[`bow_kills_${key}`] || 0;
        this.tokensPickedUp = data?.[`coins_pickedup_${key}`] || 0;
        this.deaths = data?.[`deaths_${key}`] || 0;
        this.detectiveWins = data?.[`detective_wins_${key}`] || 0;
        this.games = data?.[`games_${key}`] || 0;
        this.kills = data?.[`kills_${key}`] || 0;
        this.lastOneAlive = data?.[`last_one_alive_${key}`] || 0;
        this.longestTimeAsSurvivorSeconds = data?.[`longest_time_as_survivor_seconds_${key}`] || 0;
        this.murdererWins = data?.[`murderer_wins_${key}`] || 0;
        this.quickestDetectiveWinTimeSeconds = data?.[`quickest_detective_win_time_seconds_${key}`] || 0;
        this.quickestMurdererWinTimeSeconds = data?.[`quickest_murderer_win_time_seconds_${key}`] || 0;
        this.quickestShowdownWinTimeSeconds = data?.[`quickest_showdown_win_time_seconds_${key}`] || 0;
        this.showdownPotg = data?.[`showdown_potg_${key}`] || 0;
        this.suicides = data?.[`suicides_${key}`] || 0;
        this.survivorWins = data?.[`survivor_wins_${key}`] || 0;
        this.totalTimeSurvivedSeconds = data?.[`total_time_survived_seconds_${key}`] || 0;
        this.wasHero = data?.[`was_hero_${key}`] || 0;
        this.wins = data?.[`wins_${key}`] || 0;
    }
}
export default MurderMysteryGamemode;
//# sourceMappingURL=MurderMysteryGamemode.js.map