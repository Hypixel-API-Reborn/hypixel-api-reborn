class TurboKartRacersMap {
  /**
   * @param {object} data TurboKartRacers data
   * @param {string} mapName TurboKartRacers Map
   */
  constructor(data, mapName) {
    /**
     * Map
     * @type {string}
     */
    this.map = mapName;
    /**
     * Plays
     * @type {number}
     */
    this.plays = data[`${mapName}_plays`] || 0;
    /**
     * Box Pickups
     * @type {number}
     */
    this.boxPickups = data[`box_pickups_${mapName}`] || 0;
    /**
     * Bronze Trophies
     * @type {number}
     */
    this.bronzeTrophies = data[`bronze_trophy_${mapName}`] || 0;
    /**
     * Silver Trophies
     * @type {number}
     */
    this.silverTrophies = data[`silver_trophy_${mapName}`] || 0;
    /**
     * Gold Trophies
     * @type {number}
     */
    this.goldTrophies = data[`gold_trophy_${mapName}`] || 0;
  }
}

/**
 * TurboKartRacers class
 */
class TurboKartRacers {
  /**
   * @param {object} data TurboKartRacers data
   */
  constructor(data) {
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
     * retro Map Stats
     * @type {TurboKartRacersMap}
     */
    this.retro = new TurboKartRacersMap(data, 'retro');
    /**
     * HypixelHP Map Stats
     * @type {TurboKartRacersMap}
     */
    this.hypixelgp = new TurboKartRacersMap(data, 'hypixelgp');
    /**
     * Olympus Map Stats
     * @type {TurboKartRacersMap}
     */
    this.olympus = new TurboKartRacersMap(data, 'olympus');
    /**
     * Jungle Rush Map Stats
     * @type {TurboKartRacersMap}
     */
    this.junglerush = new TurboKartRacersMap(data, 'junglerush');
    /**
     * Canyon Map Stats
     * @type {TurboKartRacersMap}
     */
    this.canyon = new TurboKartRacersMap(data, 'canyon');
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
