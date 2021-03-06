// eslint-disable-next-line camelcase
const { pet_score } = require('../../utils/Constants');
/**
 * Skyblock Pet class
 */
class SkyblockPet {
  /**
   * Skyblock pet data
   * @param {object} data
   */
  constructor(data) {
    /**
     * Skyblock Pet UUID
     * @type {string}
     */
    this.uuid = data.uuid;
    /**
     * Skyblock Pet type
     * @type {SkyblockPetType}
     */
    this.type = data.type;
    /**
     * Skyblock Pet experience
     * @type {number}
     */
    this.xp = data.exp;
    /**
     * wether the pet is currently equipped
     * @type {boolean}
     */
    this.active = data.active;
    /**
     * Skyblock Pet rarity
     * @type {Rarity}
     */
    this.rarity = data.tier;
    /**
     * Skyblock Pet pet score
     * @type {Rarity}
     */
    this.petScore = pet_score[data.tier];
    /**
     * Skyblock Pet held item
     * @type {SkyblockPetHeldItem|null}
     */
    this.heldItem = data.heldItem ? data.heldItem.replace(/^PET_ITEM_/, '') : null;
    /**
     * Skyblock Pet candy used
     * @type {number}
     */
    this.candyUsed = data.candyUsed;
    /**
     * Skyblock Pet skin
     * @type {string|null}
     */
    this.skin = data.skin;
  }
}
/**
 * @typedef {string} Rarity
 * * `VERY_SPECIAL`
 * * `SPECIAL`
 * * `SUPREME`
 * * `MYTHIC`
 * * `LEGENDARY`
 * * `EPIC`
 * * `RARE`
 * * `UNCOMMON`
 * * `COMMON`
 */
module.exports = SkyblockPet;
