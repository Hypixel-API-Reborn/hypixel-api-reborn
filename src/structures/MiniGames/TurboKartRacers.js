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
     * @type {'DEFAULT' | 'SHY' | 'ALIEN' | 'TAXI' | 'KLAXON' | 'TRICYCLE' | 'ALARM' | 'KLOON' | 'TEDDY' | 'TRUCK' | 'JERRY'}
     */
    this.horn = data.horn || 'DEFAULT';
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
    /**
     * Canyon Map Plays
     * @type {number}
     */
    this.canyonPlays = data.canyon_plays || 0;
    /**
     * Retro Bronze Trophies
     * @type {number}
     */
    this.retroBronzeTrophies = data.bronze_trophy_retro || 0;
    /**
    * Jungle Rush Map Plays
    * @type {number}
    */
    this.retroSilverTrophies = data.silver_trophy_retro || 0;
    /**
     * Jungle Rush Map Plays
     * @type {number}
     */
    this.retroGoldTrophies = data.gold_trophy_retro || 0;
    /**
     * hypixelgp Bronze Trophies
     * @type {number}
     */
    this.hypixelgpBronzeTrophies = data.bronze_trophy_hypixelgp || 0;
    /**
    * hypixelgp Silver Trophies
    * @type {number}
    */
    this.hypixelgpSilverTrophies = data.silver_trophy_hypixelgp || 0;
    /**
     * hypixelgp Gold Trophies
     * @type {number}
     */
    this.hypixelgpGoldTrophies = data.gold_trophy_hypixelgp || 0;
    /**
     * olympus Bronze Trophies
     * @type {number}
     */
    this.olympusBronzeTrophies = data.bronze_trophy_olympus || 0;
    /**
    * olympus Silver Trophies
    * @type {number}
    */
    this.olympusSilverTrophies = data.silver_trophy_olympus || 0;
    /**
     * olympus Gold Trophies
     * @type {number}
     */
    this.olympusGoldTrophies = data.gold_trophy_olympus || 0;
    /**
     * junglerush Bronze Trophies
     * @type {number}
     */
    this.junglerushBronzeTrophies = data.bronze_trophy_junglerush || 0;
    /**
     * junglerush Silver Trophies
     * @type {number}
     */
    this.junglerushSilverTrophies = data.silver_trophy_junglerush || 0;
    /**
     * junglerush Gold Trophies
     * @type {number}
     */
    this.junglerushGoldTrophies = data.gold_trophy_junglerush || 0;
    /**
     * Canyon Bronze Trophies
     * @type {number}
     */
    this.canyonBronzeTrophies = data.gold_trophy_canyon || 0;
    /**
     * Canyon Silver Trophies
     * @type {number}
     */
    this.canyonSilverTrophies = data.gold_trophy_canyon || 0;
    /**
     * Canyon Gold Trophies
     * @type {number}
     */
    this.canyonGoldTrophies = data.gold_trophy_canyon || 0;
    /**
     * Bananas Recived
     * @type {number}
     */
    this.bananaHitsReceived = data.banana_hits_received || 0;
    /**
    * Bananas Sent
    * @type {number}
    */
    this.bananaHitsSent = data.banana_hits_sent || 0;
    /**
     * Blue Torpedos Hit
     * @type {number}
     */
    this.blueTorpedoHit = data.blue_torpedo_hit || 0;
    /**
     * Grand Prix Status
     * @type {boolean}
     */
    this.grandPrix = data.grand_prix || 'false';
    /**
     * Grand Prix Tokens
     * @type {number}
     */
    this.grandPrixTokens = data.grand_prix_tokens || 0;
  }
}
module.exports = TurboKartRacers;
