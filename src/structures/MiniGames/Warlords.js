const divide = require('../../utils/divide');

class WarlordsClass {
  /**
   * @param {object} data Warlords data
   * @param {string} className
   */
  constructor(data, className) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`wins_${className}`] || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data[`losses_${className}`] || 0;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Games Played
     * @type {number}
     */
    this.gamesPlayed = data[`${className}_plays`];
    /**
     * Damage
     * @type {number}
     */
    this.damage = data[`damage_${className}`] || 0;
    /**
     * Heal
     * @type {number}
     */
    this.heal = data[`heal_${className}`] || 0;
    /**
     * Damage Prevented
     * @type {number}
     */
    this.damagePrevented = data[`damage_prevented_${className}`] || 0;
  }
}

/**
 * Warlords class
 */
class Warlords {
  /**
   * @param {object} data Warlords data
   */
  constructor(data) {
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
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.win_streak || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data.assists || 0;
    /**
     * Chosen class
     * @type {string}
     */
    this.class = data.chosen_class || '';
    /**
     * pyromancer
     * @type {WarlordsClass}
     */
    this.pyromancer = new WarlordsClass(data, 'pyromancer');
    /**
     * mage
     * @type {WarlordsClass}
     */
    this.mage = new WarlordsClass(data, 'mage');
    /**
     * thunderlord
     * @type {WarlordsClass}
     */
    this.thunderlord = new WarlordsClass(data, 'thunderlord');
    /**
     * shaman
     * @type {WarlordsClass}
     */
    this.shaman = new WarlordsClass(data, 'shaman');
    /**
     * earthwarden
     * @type {WarlordsClass}
     */
    this.earthwarden = new WarlordsClass(data, 'earthwarden');
    /**
     * aquamancer
     * @type {WarlordsClass}
     */
    this.aquamancer = new WarlordsClass(data, 'aquamancer');
    /**
     * paladin
     * @type {WarlordsClass}
     */
    this.paladin = new WarlordsClass(data, 'paladin');
    /**
     * avenger
     * @type {WarlordsClass}
     */
    this.avenger = new WarlordsClass(data, 'avenger');
    /**
     * warrior
     * @type {WarlordsClass}
     */
    this.warrior = new WarlordsClass(data, 'warrior');
    /**
     * defender
     * @type {WarlordsClass}
     */
    this.defender = new WarlordsClass(data, 'defender');
    /**
     * cryomancer
     * @type {WarlordsClass}
     */
    this.cryomancer = new WarlordsClass(data, 'cryomancer');
    /**
     * crusader
     * @type {WarlordsClass}
     */
    this.crusader = new WarlordsClass(data, 'crusader');
    /**
     * berserker
     * @type {WarlordsClass}
     */
    this.berserker = new WarlordsClass(data, 'berserker');
    /**
     * protector
     * @type {WarlordsClass}
     */
    this.protector = new WarlordsClass(data, 'protector');
    /**
     * revenant
     * @type {WarlordsClass}
     */
    this.revenant = new WarlordsClass(data, 'revenant');
    /**
     * spiritguard
     * @type {WarlordsClass}
     */
    this.spiritguard = new WarlordsClass(data, 'spiritguard');
  }
}
module.exports = Warlords;
