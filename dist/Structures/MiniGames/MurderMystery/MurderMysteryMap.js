import MurderMysteryGamemode from './MurderMysteryGamemode.js';
class MurderMysteryMap {
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
    assassins;
    classic;
    doubleUp;
    hardcode;
    infection;
    showdown;
    constructor(data, map) {
        this.alphaWins = data?.[`alpha_wins_${map}`] || 0;
        this.bowKills = data?.[`bow_kills_${map}`] || 0;
        this.tokensPickedUp = data?.[`coins_pickedup_${map}`] || 0;
        this.deaths = data?.[`deaths_${map}`] || 0;
        this.detectiveWins = data?.[`detective_wins_${map}`] || 0;
        this.games = data?.[`games_${map}`] || 0;
        this.kills = data?.[`kills_${map}`] || 0;
        this.lastOneAlive = data?.[`last_one_alive_${map}`] || 0;
        this.longestTimeAsSurvivorSeconds = data?.[`longest_time_as_survivor_seconds_${map}`] || 0;
        this.murdererWins = data?.[`murderer_wins_${map}`] || 0;
        this.quickestDetectiveWinTimeSeconds = data?.[`quickest_detective_win_time_seconds_${map}`] || 0;
        this.quickestMurdererWinTimeSeconds = data?.[`quickest_murderer_win_time_seconds_${map}`] || 0;
        this.quickestShowdownWinTimeSeconds = data?.[`quickest_showdown_win_time_seconds_${map}`] || 0;
        this.showdownPotg = data?.[`showdown_potg_${map}`] || 0;
        this.suicides = data?.[`suicides_${map}`] || 0;
        this.survivorWins = data?.[`survivor_wins_${map}`] || 0;
        this.totalTimeSurvivedSeconds = data?.[`total_time_survived_seconds_${map}`] || 0;
        this.wasHero = data?.[`was_hero_${map}`] || 0;
        this.wins = data?.[`wins_${map}`] || 0;
        this.assassins = new MurderMysteryGamemode(data, 'MURDER_ASSASSINS', map);
        this.classic = new MurderMysteryGamemode(data, 'MURDER_CLASSIC', map);
        this.doubleUp = new MurderMysteryGamemode(data, 'MURDER_DOUBLE_UP', map);
        this.hardcode = new MurderMysteryGamemode(data, 'MURDER_HARDCORE', map);
        this.infection = new MurderMysteryGamemode(data, 'MURDER_INFECTION', map);
        this.showdown = new MurderMysteryGamemode(data, 'MURDER_SHOWDOWN', map);
    }
}
export default MurderMysteryMap;
//# sourceMappingURL=MurderMysteryMap.js.map