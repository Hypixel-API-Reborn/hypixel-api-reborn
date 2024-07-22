const { duelsDivisions } = require('../../utils/Constants');
const romanize = require('../../utils/romanize');
const divide = require('../../utils/divide');

// eslint-disable-next-line jsdoc/require-jsdoc
function getTitle(data, mode = null) {
  for (const div of duelsDivisions.slice().reverse()) {
    const prestige = data[`${mode ? mode : 'all_modes'}_${div.key}_title_prestige`];
    if (prestige) {
      return `${div.name} ${romanize(prestige)}`;
    }
  }
  return null;
}

class DuelsGamemode {
  /**
   * @param {object} data Duels data
   */
  constructor(data, mode, title = '') {
    /**
     * Title
     * @type {string}
     */
    this.title = title;
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data[`current_winstreak_mode_${mode}`] || 0;
    /**
     * Best Winstreak
     * @type {number}
     */
    this.bestWinstreak = data[`best_winstreak_mode_${mode}`] || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`${mode}_kills`] || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`${mode}_deaths`] || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`${mode}_wins`] || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data[`${mode}_losses`] || 0;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Played Games
     * @type {number}
     */
    this.playedGames = data[`${mode}_rounds_played`] || 0;
    /**
     * Swings
     * @type {number}
     */
    this.swings = data[`${mode}_melee_swings`] || 0;
    /**
     * Hits
     * @type {number}
     */
    this.hits = data[`${mode}_melee_hits`] || 0;
    /**
     * Melee Accuracy
     * @type {number}
     */
    this.meleeAccuracy = divide(this.swings, this.hits);
    /**
     * Bow Shots
     * @type {number}
     */
    this.bowShots = data[`${mode}_bow_shots`] || 0;
    /**
     * Bow Hits
     * @type {number}
     */
    this.bowHits = data[`${mode}_bow_hits`] || 0;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.bowShots, this.bowHits);
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced = data[`${mode}_blocks_placed`] || 0;
    /**
     * Health Regenerated
     * @type {number}
     */
    this.healthRegenerated = data[`${mode}_health_regenerated`] || 0;
    /**
     * Golden Apples Eatan
     * @type {number}
     */
    this.goldenApplesEatan = data[`${mode}_golden_apples_eaten`] || 0;
  }
}

class DuelsUHC {
  /**
   * @param {object} data Duels data
   */
  constructor(data) {
    /**
     * Title
     * @type {string}
     */
    this.title = getTitle(data, 'uhc');
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.current_uhc_winstreak || 0;
    /**
     * Best Winstreak
     * @type {number}
     */
    this.bestWinstreak = data.best_uhc_winstreak || 0;
    /**
     * Solo Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.solo = new DuelsGamemode(data, 'uhc_duel', this.title);
    /**
     * Doubles Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.doubles = new DuelsGamemode(data, 'uhc_doubles', this.title);
    /**
     * Fours Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.fours = new DuelsGamemode(data, 'uhc_four', this.title);
    /**
     * Deathmatch Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.deathmatch = new DuelsGamemode(data, 'uhc_meetup', this.title);
    /**
     * Kills
     * @type {number}
     */
    this.kills = this.solo.kills + this.doubles.kills + this.fours.kills + this.deathmatch.kills;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = this.solo.deaths + this.doubles.deaths + this.fours.deaths + this.deathmatch.deaths;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = this.solo.wins + this.doubles.wins + this.fours.wins + this.deathmatch.wins;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.solo.losses + this.doubles.losses + this.fours.losses + this.deathmatch.losses;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Played Games
     * @type {number}
     */
    this.playedGames =
      this.solo.playedGames + this.doubles.playedGames + this.fours.playedGames + this.deathmatch.playedGames;
    /**
     * Swings
     * @type {number}
     */
    this.swings = this.solo.swings + this.doubles.swings + this.fours.swings + this.deathmatch.swings;
    /**
     * Hits
     * @type {number}
     */
    this.hits = this.solo.hits + this.doubles.hits + this.fours.hits + this.deathmatch.hits;
    /**
     * Melee Accuracy
     * @type {number}
     */
    this.meleeAccuracy = divide(this.hits, this.swings);
    /**
     * Bow Shots
     * @type {number}
     */
    this.bowShots = this.solo.bowShots + this.doubles.bowShots + this.fours.bowShots + this.deathmatch.bowShots;
    /**
     * Bow Hits
     * @type {number}
     */
    this.bowHits = this.solo.bowHits + this.doubles.bowHits + this.fours.bowHits + this.deathmatch.bowHits;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced =
      this.solo.blocksPlaced + this.doubles.blocksPlaced + this.fours.blocksPlaced + this.deathmatch.blocksPlaced;
    /**
     * Health Regenerated
     * @type {number}
     */
    this.healthRegenerated =
      this.solo.healthRegenerated +
      this.doubles.healthRegenerated +
      this.fours.healthRegenerated +
      this.deathmatch.healthRegenerated;
    /**
     * Golden Apples Eatan
     * @type {number}
     */
    this.goldenApplesEatan =
      this.solo.goldenApplesEatan +
      this.doubles.goldenApplesEatan +
      this.fours.goldenApplesEatan +
      this.deathmatch.goldenApplesEatan;
  }
}
class DuelsSkyWars {
  /**
   * @param {object} data Duels data
   */
  constructor(data) {
    /**
     * Title
     * @type {string}
     */
    this.title = getTitle(data, 'sw');
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.current_sw_winstreak || 0;
    /**
     * Best Winstreak
     * @type {number}
     */
    this.bestWinstreak = data.best_sw_winstreak || 0;
    /**
     * Solo Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.solo = new DuelsGamemode(data, 'sw_duel', this.title);
    /**
     * Doubles Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.doubles = new DuelsGamemode(data, 'sw_doubles', this.title);
    /**
     * Kills
     * @type {number}
     */
    this.kills = this.solo.kills + this.doubles.kills;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = this.solo.deaths + this.doubles.deaths;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = this.solo.wins + this.doubles.wins;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.solo.losses + this.doubles.losses;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Played Games
     * @type {number}
     */
    this.playedGames = this.solo.playedGames + this.doubles.playedGames;
    /**
     * Swings
     * @type {number}
     */
    this.swings = this.solo.swings + this.doubles.swings;
    /**
     * Hits
     * @type {number}
     */
    this.hits = this.solo.hits + this.doubles.hits;
    /**
     * Melee Accuracy
     * @type {number}
     */
    this.meleeAccuracy = divide(this.hits, this.swings);
    /**
     * Bow Shots
     * @type {number}
     */
    this.bowShots = this.solo.bowShots + this.doubles.bowShots;
    /**
     * Bow Hits
     * @type {number}
     */
    this.bowHits = this.solo.bowHits + this.doubles.bowHits;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced = this.solo.blocksPlaced + this.doubles.blocksPlaced;
    /**
     * Health Regenerated
     * @type {number}
     */
    this.healthRegenerated = this.solo.healthRegenerated + this.doubles.healthRegenerated;
    /**
     * Golden Apples Eatan
     * @type {number}
     */
    this.goldenApplesEatan = this.solo.goldenApplesEatan + this.doubles.goldenApplesEatan;
  }
}
class DuelsMegaWalls {
  /**
   * @param {object} data Duels data
   */
  constructor(data) {
    /**
     * Title
     * @type {string}
     */
    this.title = getTitle(data, 'mega_walls');
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.current_mega_walls_winstreak || 0;
    /**
     * Best Winstreak
     * @type {number}
     */
    this.bestWinstreak = data.best_mega_walls_winstreak || 0;
    /**
     * Solo Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.solo = new DuelsGamemode(data, 'mw_duel', this.title);
    /**
     * Doubles Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.doubles = new DuelsGamemode(data, 'mw_doubles', this.title);
    /**
     * Kills
     * @type {number}
     */
    this.kills = this.solo.kills + this.doubles.kills;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = this.solo.deaths + this.doubles.deaths;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = this.solo.wins + this.doubles.wins;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.solo.losses + this.doubles.losses;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Played Games
     * @type {number}
     */
    this.playedGames = this.solo.playedGames + this.doubles.playedGames;
    /**
     * Swings
     * @type {number}
     */
    this.swings = this.solo.swings + this.doubles.swings;
    /**
     * Hits
     * @type {number}
     */
    this.hits = this.solo.hits + this.doubles.hits;
    /**
     * Melee Accuracy
     * @type {number}
     */
    this.meleeAccuracy = divide(this.hits, this.swings);
    /**
     * Bow Shots
     * @type {number}
     */
    this.bowShots = this.solo.bowShots + this.doubles.bowShots;
    /**
     * Bow Hits
     * @type {number}
     */
    this.bowHits = this.solo.bowHits + this.doubles.bowHits;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced = this.solo.blocksPlaced + this.doubles.blocksPlaced;
    /**
     * Health Regenerated
     * @type {number}
     */
    this.healthRegenerated = this.solo.healthRegenerated + this.doubles.healthRegenerated;
    /**
     * Golden Apples Eatan
     * @type {number}
     */
    this.goldenApplesEatan = this.solo.goldenApplesEatan + this.doubles.goldenApplesEatan;
  }
}
class DuelsOP {
  /**
   * @param {object} data Duels data
   */
  constructor(data) {
    /**
     * Title
     * @type {string}
     */
    this.title = getTitle(data, 'op');
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.current_op_winstreak || 0;
    /**
     * Best Winstreak
     * @type {number}
     */
    this.bestWinstreak = data.best_op_winstreak || 0;
    /**
     * Solo Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.solo = new DuelsGamemode(data, 'op_duel', this.title);
    /**
     * Doubles Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.doubles = new DuelsGamemode(data, 'op_doubles', this.title);
    /**
     * Kills
     * @type {number}
     */
    this.kills = this.solo.kills + this.doubles.kills;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = this.solo.deaths + this.doubles.deaths;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = this.solo.wins + this.doubles.wins;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.solo.losses + this.doubles.losses;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Played Games
     * @type {number}
     */
    this.playedGames = this.solo.playedGames + this.doubles.playedGames;
    /**
     * Swings
     * @type {number}
     */
    this.swings = this.solo.swings + this.doubles.swings;
    /**
     * Hits
     * @type {number}
     */
    this.hits = this.solo.hits + this.doubles.hits;
    /**
     * Melee Accuracy
     * @type {number}
     */
    this.meleeAccuracy = divide(this.hits, this.swings);
    /**
     * Bow Shots
     * @type {number}
     */
    this.bowShots = this.solo.bowShots + this.doubles.bowShots;
    /**
     * Bow Hits
     * @type {number}
     */
    this.bowHits = this.solo.bowHits + this.doubles.bowHits;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced = this.solo.blocksPlaced + this.doubles.blocksPlaced;
    /**
     * Health Regenerated
     * @type {number}
     */
    this.healthRegenerated = this.solo.healthRegenerated + this.doubles.healthRegenerated;
    /**
     * Golden Apples Eatan
     * @type {number}
     */
    this.goldenApplesEatan = this.solo.goldenApplesEatan + this.doubles.goldenApplesEatan;
  }
}
class DuelsBridge {
  /**
   * @param {object} data Duels data
   */
  constructor(data) {
    /**
     * Title
     * @type {string}
     */
    this.title = getTitle(data, 'bridge');
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.current_bridge_winstreak || 0;
    /**
     * Best Winstreak
     * @type {number}
     */
    this.bestWinstreak = data.best_bridge_winstreak || 0;
    /**
     * Solo Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.solo = new DuelsGamemode(data, 'bridge_duel', this.title);
    /**
     * Doubles Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.doubles = new DuelsGamemode(data, 'bridge_doubles', this.title);
    /**
     * Threes Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.threes = new DuelsGamemode(data, 'bridge_threes', this.title);
    /**
     * Fours Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.fours = new DuelsGamemode(data, 'bridge_fours', this.title);
    /**
     * 2v2v2v2 Game Mode Stats
     * @type {DuelsGamemode}
     */
    this['2v2v2v2'] = new DuelsGamemode(data, '2v2v2v2', this.title);
    /**
     * 3v3v3v3 Game Mode Stats
     * @type {DuelsGamemode}
     */
    this['3v3v3v3'] = new DuelsGamemode(data, '3v3v3v3', this.title);
    /**
     * Capture The Flag Game Mode Stats
     * @type {DuelsGamemode}
     */
    this.ctf = new DuelsGamemode(data, 'capture_threes', this.title);
    /**
     * Kills
     * @type {number}
     */
    this.kills =
      this.solo.kills +
      this.doubles.kills +
      this.threes.kills +
      this.fours.kills +
      this['2v2v2v2'].kills +
      this['3v3v3v3'].kills +
      this.ctf.kills;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths =
      this.solo.deaths +
      this.doubles.deaths +
      this.threes.deaths +
      this.fours.deaths +
      this['2v2v2v2'].deaths +
      this['3v3v3v3'].deaths +
      this.ctf.deaths;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins =
      this.solo.wins +
      this.doubles.wins +
      this.threes.wins +
      this.fours.wins +
      this['2v2v2v2'].wins +
      this['3v3v3v3'].wins +
      this.ctf.wins;
    /**
     * Losses
     * @type {number}
     */
    this.losses =
      this.solo.losses +
      this.doubles.losses +
      this.threes.losses +
      this.fours.losses +
      this['2v2v2v2'].losses +
      this['3v3v3v3'].losses +
      this.ctf.losses;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Played Games
     * @type {number}
     */
    this.playedGames =
      this.solo.playedGames +
      this.doubles.playedGames +
      this.threes.playedGames +
      this.fours.playedGames +
      this['2v2v2v2'].playedGames +
      this['3v3v3v3'].playedGames +
      this.ctf.playedGames;
    /**
     * Swings
     * @type {number}
     */
    this.swings =
      this.solo.swings +
      this.doubles.swings +
      this.threes.swings +
      this.fours.swings +
      this['2v2v2v2'].swings +
      this['3v3v3v3'].swings +
      this.ctf.swings;
    /**
     * Hits
     * @type {number}
     */
    this.hits =
      this.solo.hits +
      this.doubles.hits +
      this.threes.hits +
      this.fours.hits +
      this['2v2v2v2'].hits +
      this['3v3v3v3'].hits +
      this.ctf.hits;
    /**
     * Melee Accuracy
     * @type {number}
     */
    this.meleeAccuracy = divide(this.hits, this.swings);
    /**
     * Bow Shots
     * @type {number}
     */
    this.bowShots =
      this.solo.bowShots +
      this.doubles.bowShots +
      this.threes.bowShots +
      this.fours.bowShots +
      this['2v2v2v2'].bowShots +
      this['3v3v3v3'].bowShots +
      this.ctf.bowShots;
    /**
     * Bow Hits
     * @type {number}
     */
    this.bowHits =
      this.solo.bowHits +
      this.doubles.bowHits +
      this.threes.bowHits +
      this.fours.bowHits +
      this['2v2v2v2'].bowHits +
      this['3v3v3v3'].bowHits +
      this.ctf.bowHits;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced =
      this.solo.blocksPlaced +
      this.doubles.blocksPlaced +
      this.threes.blocksPlaced +
      this.fours.blocksPlaced +
      this['2v2v2v2'].blocksPlaced +
      this['3v3v3v3'].blocksPlaced +
      this.ctf.blocksPlaced;
    /**
     * Health Regenerated
     * @type {number}
     */
    this.healthRegenerated =
      this.solo.healthRegenerated +
      this.doubles.healthRegenerated +
      this.threes.healthRegenerated +
      this.fours.healthRegenerated +
      this['2v2v2v2'].healthRegenerated +
      this['3v3v3v3'].healthRegenerated +
      this.ctf.healthRegenerated;
    /**
     * Golden Apples Eatan
     * @type {number}
     */
    this.goldenApplesEatan =
      this.solo.goldenApplesEatan +
      this.doubles.goldenApplesEatan +
      this.threes.goldenApplesEatan +
      this.fours.goldenApplesEatan +
      this['2v2v2v2'].goldenApplesEatan +
      this['3v3v3v3'].goldenApplesEatan +
      this.ctf.goldenApplesEatan;
  }
}

/**
 * Duels class
 */
class Duels {
  /**
   * @param {object} data Duels data
   */
  constructor(data) {
    /**
     * Tokens
     * @type {number}
     */
    this.tokens = data.coins || 0;
    /**
     * All modes Title
     * @type {string|null}
     */
    this.title = getTitle(data);
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data.losses || 0;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data.games_played_duels || 0;
    /**
     * Current winstreak
     * @type {number}
     */
    this.winstreak = data.current_winstreak || 0;
    /**
     * Best overall winstreak
     * @type {number}
     */
    this.bestWinstreak = data.best_overall_winstreak || 0;
    /**
     * Ping Range Preference
     * @type {number}
     */
    this.ping = data.pingPreference || 0;
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced = data.blocks_placed || 0;
    /**
     * Swings
     * @type {number}
     */
    this.swings = data.melee_swings || 0;
    /**
     * Hits
     * @type {number}
     */
    this.hits = data.melee_hits || 0;
    /**
     * Melee Accuracy
     * @type {number}
     */
    this.meleeAccuracy = divide(this.hits, this.swings);
    /**
     * Bow Shots
     * @type {number}
     */
    this.bowShots = data.bow_shots || 0;
    /**
     * Bow Hits
     * @type {number}
     */
    this.bowHits = data.bow_hits || 0;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.bowHits, this.bowShots);
    /**
     * Health Regenerated
     * @type {number}
     */
    this.healthRegenerated = data.health_regenerated || 0;
    /**
     * Golden Apples Eaten
     * @type {number}
     */
    this.goldenApplesEatan = data.golden_apples_eaten || 0;
    /**
     * UHC duels stats
     * @type {DuelsUHC}
     */
    this.uhc = new DuelsUHC(data);

    /**
     * SkyWars duels stats
     * @type {DuelsSkyWars}
     */
    this.skywars = new DuelsSkyWars(data);
    /**
     * MegaWalls duels stats
     * @type {DuelsMegaWalls}
     */
    this.megawalls = new DuelsMegaWalls(data);
    /**
     * Blitz duel stats
     * @type {DuelsGamemode}
     */
    this.blitz = new DuelsGamemode(data, 'blitz_duel', getTitle(data, 'blitz'));
    /**
     * OP duels stats
     * @type {DuelsOP}
     */
    this.op = new DuelsOP(data);
    /**
     * Classic duels stats
     * @type {DuelsGamemode}
     */
    this.classic = new DuelsGamemode(data, 'classic_duel', getTitle(data, 'classic'));
    /**
     * Bow duels stats
     * @type {DuelsGamemode}
     */
    this.bow = new DuelsGamemode(data, 'bow_duel', getTitle(data, 'bow'));
    /**
     * No Debuff duels stats
     * @type {DuelsGamemode}
     */
    this.noDebuff = new DuelsGamemode(data, 'potion_duel', getTitle(data, 'no_debuff'));
    /**
     * Combo duels stats
     * @type {DuelsGamemode}
     */
    this.combo = new DuelsGamemode(data, 'combo_duel', getTitle(data, 'combo'));
    /**
     * Bow Spleef duels stats
     * @type {DuelsGamemode}
     */
    this.bowSpleef = new DuelsGamemode(data, 'bowspleef_duel', getTitle(data, 'tnt_games'));
    /**
     * Sumo duels stats
     * @type {DuelsGamemode}
     */
    this.sumo = new DuelsGamemode(data, 'sumo_duel', getTitle(data, 'sumo'));
    /**
     * Bridge duels stats
     * @type {DuelsBridge}
     */
    this.bridge = new DuelsBridge(data);
    /**
     * Parkour duels stats
     * @type {DuelsGamemode}
     */
    this.parkour = new DuelsGamemode(data, 'parkour_eight', getTitle(data, 'parkour'));
    /**
     * Arena duels stats
     * @type {DuelsGamemode}
     */
    this.arena = new DuelsGamemode(data, 'duel_arena');
  }
}

module.exports = Duels;
