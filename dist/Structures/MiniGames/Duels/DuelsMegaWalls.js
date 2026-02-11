import Divide from '../../../Utils/Divide.js';
import DuelsGamemode from './DuelsGamemode.js';
import { getTitle } from './Duels.js';
class DuelsMegaWalls {
    title;
    winStreak;
    bestWinStreak;
    solo;
    doubles;
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
    constructor(data) {
        this.title = getTitle(data, 'mega_walls');
        this.winStreak = data?.current_mega_walls_winstreak || 0;
        this.bestWinStreak = data?.best_mega_walls_winstreak || 0;
        this.solo = new DuelsGamemode(data, 'mw_duel', this.title);
        this.doubles = new DuelsGamemode(data, 'mw_doubles', this.title);
        this.kills = this.solo.kills + this.doubles.kills;
        this.deaths = this.solo.deaths + this.doubles.deaths;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = this.solo.wins + this.doubles.wins;
        this.losses = this.solo.losses + this.doubles.losses;
        this.WLR = Divide(this.wins, this.losses);
        this.playedGames = this.solo.playedGames + this.doubles.playedGames;
        this.swings = this.solo.swings + this.doubles.swings;
        this.hits = this.solo.hits + this.doubles.hits;
        this.meleeAccuracy = Divide(this.hits, this.swings);
        this.bowShots = this.solo.bowShots + this.doubles.bowShots;
        this.bowHits = this.solo.bowHits + this.doubles.bowHits;
        this.bowAccuracy = Divide(this.bowHits, this.bowShots);
        this.blocksPlaced = this.solo.blocksPlaced + this.doubles.blocksPlaced;
        this.healthRegenerated = this.solo.healthRegenerated + this.doubles.healthRegenerated;
        this.goldenApplesEaten = this.solo.goldenApplesEaten + this.doubles.goldenApplesEaten;
    }
}
export default DuelsMegaWalls;
//# sourceMappingURL=DuelsMegaWalls.js.map