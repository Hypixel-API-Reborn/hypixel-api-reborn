const divide = require('../../utils/divide');
/**
 * MegaWalls class
 * @param {object} data MegaWalls data
 */
class MegaWalls {
  constructor (data) {
    /**
     * Selected class
     * @type {string}
     */
    this.selectedClass = data.chosen_class || null;
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data.assists || 0;
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
     * Final kills
     * @type {number}
     */
    this.finalKills = data.final_kills || 0;
    /**
     * Final assists
     * @type {number}
     */
    this.finalAssists = data.final_assists || 0;
    /**
     * Final deaths
     * @type {number}
     */
    this.finalDeaths = isNaN(data.final_deaths + data.finalDeaths) ? 0 : Math.floor(data.final_deaths + data.finalDeaths);
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data.games_played || 0;
    /**
     * Wither damage
     * @type {number}
     */
    this.witherDamage = data.wither_damage || 0;
    /**
     * Defender kills
     * @type {number}
     */
    this.defenderKills = data.defender_kills || 0;
    /**
     * Stats for each mode
     * @type {MegaWallsMode}
     */
    this.mode = {
      normal: {
        kills: data.kills_standard || 0,
        deaths: data.deaths_standard || 0,
        KDRatio: divide(data.kills_standard, data.deaths_standard),
        wins: data.wins_standard || 0,
        losses: data.losses_standard || 0,
        WLRatio: divide(data.wins_standard, data.losses_standard)
      },
      faceoff: {
        kills: data.kills_face_off || 0,
        deaths: data.deaths_face_off || 0,
        KDRatio: divide(data.kills_face_off, data.deaths_face_off),
        wins: data.wins_face_off || 0,
        losses: data.losses_face_off || 0,
        WLRatio: divide(data.wins_face_off, data.losses_face_off)
      },
      casualBrawl: {
        kills: data.kills_gvg || 0,
        deaths: data.deaths_gvg || 0,
        KDRatio: divide(data.kills_gvg, data.deaths_gvg),
        wins: data.wins_gvg || 0,
        losses: data.losses_gvg || 0,
        WLRatio: divide(data.wins_gvg, data.losses_gvg)
      }
    };
  }
}
/**
 * @typedef {object} MegaWallsMode
 * @property {object} normal Normal mode
 * @property {object} faceoff Faceoff mode
 * @property {object} casualBrawl Casual brawl mode
 */
/**
 * @typedef {object} MegaWallsModeStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill Death ratio
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} WLRatio Win Loss ratio
 */
module.exports = MegaWalls;
