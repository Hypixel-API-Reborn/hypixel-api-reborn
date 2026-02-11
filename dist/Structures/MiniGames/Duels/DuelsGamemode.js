import Divide from '../../../Utils/Divide.js';
class DuelsGamemode {
    title;
    winStreak;
    bestWinStreak;
    kills;
    deaths;
    KDR;
    wins;
    losses;
    WLR;
    playedGames;
    swings;
    hits;
    meleeAccuracy;
    bowShots;
    bowHits;
    bowAccuracy;
    blocksPlaced;
    healthRegenerated;
    goldenApplesEaten;
    constructor(data, mode, title = '') {
        this.title = title;
        this.winStreak = data?.[`current_winstreak_mode_${mode}`] || 0;
        this.bestWinStreak = data?.[`best_winstreak_mode_${mode}`] || 0;
        this.kills = data?.[`${mode}_kills`] || 0;
        this.deaths = data?.[`${mode}_deaths`] || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.[`${mode}_wins`] || 0;
        this.losses = data?.[`${mode}_losses`] || 0;
        this.WLR = Divide(this.wins, this.losses);
        this.playedGames = data?.[`${mode}_rounds_played`] || 0;
        this.swings = data?.[`${mode}_melee_swings`] || 0;
        this.hits = data?.[`${mode}_melee_hits`] || 0;
        this.meleeAccuracy = Divide(this.swings, this.hits);
        this.bowShots = data?.[`${mode}_bow_shots`] || 0;
        this.bowHits = data?.[`${mode}_bow_hits`] || 0;
        this.bowAccuracy = Divide(this.bowShots, this.bowHits);
        this.blocksPlaced = data?.[`${mode}_blocks_placed`] || 0;
        this.healthRegenerated = data?.[`${mode}_health_regenerated`] || 0;
        this.goldenApplesEaten = data?.[`${mode}_golden_apples_eaten`] || 0;
    }
}
export default DuelsGamemode;
//# sourceMappingURL=DuelsGamemode.js.map