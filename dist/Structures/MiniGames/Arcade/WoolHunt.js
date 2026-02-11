class WoolHunt {
    assists;
    deaths;
    deathsToWoolholder;
    deathsWithWool;
    experiencedDraws;
    experiencedLosses;
    experiencedWins;
    fastestWin;
    fastestWoolCapture;
    goldEarned;
    goldSpent;
    inventorylayout;
    kills;
    killsOnWoolholder;
    killsWithWool;
    longestGame;
    mostGoldEarned;
    mostKillsAndAssists;
    participatedDraws;
    participatedLosses;
    participatedWins;
    woolsCaptured;
    woolsStolen;
    constructor(data) {
        this.assists = data?.woolhunt_assists || 0;
        this.deaths = data?.woolhunt_deaths || 0;
        this.deathsToWoolholder = data?.woolhunt_deaths_to_woolholder || 0;
        this.deathsWithWool = data?.woolhunt_deaths_with_wool || 0;
        this.experiencedDraws = data?.woolhunt_experienced_draws || 0;
        this.experiencedLosses = data?.woolhunt_experienced_losses || 0;
        this.experiencedWins = data?.woolhunt_experienced_wins || 0;
        this.fastestWin = data?.woolhunt_fastest_win || 0;
        this.fastestWoolCapture = data?.woolhunt_fastest_wool_capture || 0;
        this.goldEarned = data?.woolhunt_gold_earned || 0;
        this.goldSpent = data?.woolhunt_gold_spent || 0;
        this.inventorylayout = data?.woolhunt_inventorylayout || {};
        this.kills = data?.woolhunt_kills || 0;
        this.killsOnWoolholder = data?.woolhunt_kills_on_woolholder || 0;
        this.killsWithWool = data?.woolhunt_kills_with_wool || 0;
        this.longestGame = data?.woolhunt_longest_game || 0;
        this.mostGoldEarned = data?.woolhunt_most_gold_earned || 0;
        this.mostKillsAndAssists = data?.woolhunt_most_kills_and_assists || 0;
        this.participatedDraws = data?.woolhunt_participated_draws || 0;
        this.participatedLosses = data?.woolhunt_participated_losses || 0;
        this.participatedWins = data?.woolhunt_participated_wins || 0;
        this.woolsCaptured = data?.woolhunt_wools_captured || 0;
        this.woolsStolen = data?.woolhunt_wools_stolen || 0;
    }
}
export default WoolHunt;
//# sourceMappingURL=WoolHunt.js.map