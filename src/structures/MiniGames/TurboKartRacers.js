/**
 * TurboKartRacers class
 */
class TurboKartRacers {
  /**
   * @param {object} data TurboKartRacers data
   */
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
      * Wins
      * @type {number}
      */
    this.wins = data.wins || 0;
    /**
     * Completed laps
     * @type {number}
     */
    this.completedLaps = data.laps_completed || 0;
    /**
     * Bronze trophies
     * @type {number}
     */
    this.bronzeTrophies = data.bronze_trophy || 0;
    /**
     * Silver trophies
     * @type {number}
     */
    this.silverTrophies = data.silver_trophy || 0;
    /**
     * Gold trophies
     * @type {number}
     */
    this.goldTrophies = data.gold_trophy || 0;
    /**
     * Box pickups
     * @type {number}
     */
    this.boxPickups = data.box_pickups || 0;
    /**
     * Horn 
     * @type {string}
     */
    this.horn = data.horn || 0;
    /**
     * Retro Map Plays 
     * @type {number}
     */
     this.retroPlays = data.retro_plays || 0;
    /**
     * Hypixel GP Map Plays 
     * @type {number}
     */
    this.hypixelgpPlays = data.hypixelgp_plays || 0;
    /**
     * Olympus Map Plays 
     * @type {number}
     */
     this.olympusPlays = data.olympus_plays || 0;
    /**
     * Jungle Rush Map Plays 
     * @type {number}
     */
    this.junglerushPlays = data.junglerush_plays || 0;
  }
}
module.exports = TurboKartRacers;
