const { removeSnakeCaseString } = require('../utils/removeSnakeCase');
const Pets = require('./Pets');
/**
 * Player Cosmetics class
 */
class PlayerCosmetics {
  /**
   * @param {object} data data
   * @example
   */
  constructor(data) {
    /**
     * All cosmetics
     * @type {string[]}
     */
    this.allCosmetics = data?.vanityMeta?.packages || undefined;
    /**
     * Pets
     * @type {Pets|null}
     */
    this.petManager = this.allCosmetics
      ? new Pets(
          this.allCosmetics.filter((x) => x.startsWith('pet_')),
          data
        )
      : null;
  }
  /**
   * Suits
   * @type {string[]}
   */
  get suits() {
    if (!this.suits) {
      this.suits = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('suit_'))
            .map((x) => removeSnakeCaseString(x.replace('suit_', ''))) || []
        : [];
    }
    return this.suits;
  }
  /**
   * Hats
   * @type {string[]}
   */
  get hats() {
    if (!this.hats) {
      this.hats = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('hat_'))
            .map((x) => removeSnakeCaseString(x.replace('hat_', ''))) || []
        : [];
    }
    return this.hats;
  }
  /**
   * Gadgets
   * @type {string[]}
   */
  get gadgets() {
    if (!this.gadgets) {
      this.gadgets = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('gadget_'))
            .map((x) => removeSnakeCaseString(x.replace('gadget_', ''))) || []
        : [];
    }
    return this.gadgets;
  }
  /**
   * Morphs
   * @type {string[]}
   */
  get morphs() {
    if (!this.morphs) {
      this.morphs = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('morph_'))
            .map((x) => removeSnakeCaseString(x.replace('morph_', ''))) || []
        : [];
    }
    return this.morphs;
  }
  /**
   * Cloaks
   * @type {string[]}
   */
  get cloaks() {
    if (!this.cloaks) {
      this.cloaks = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('cloak_'))
            .map((x) => removeSnakeCaseString(x.replace('cloak_', ''))) || []
        : [];
    }
    return this.cloaks;
  }
  /**
   * Taunts
   * @type {string[]}
   */
  get taunts() {
    if (!this.taunts) {
      this.taunts = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('taunt_'))
            .map((x) => removeSnakeCaseString(x.replace('taunt_', ''))) || []
        : [];
    }
    return this.taunts;
  }
  /**
   * rankColors
   * @type {string[]}
   */
  get rankColors() {
    if (!this.rankColors) {
      this.rankColors = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('rankcolor_'))
            .map((x) => removeSnakeCaseString(x.replace('rankcolor_', ''))) || []
        : [];
    }
    return this.rankColors;
  }
  /**
   * Particle Packs
   * @type {string[]}
   */
  get particlePacks() {
    if (!this.particle) {
      this.particle = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('particlepack_'))
            .map((x) => removeSnakeCaseString(x.replace('particlepack_', ''))) || []
        : [];
    }
    return this.particlepacks;
  }
  /**
   * Click Effects
   * @type {string[]}
   */
  get clickEffects() {
    if (!this.clickfx) {
      this.clickfx = this.allCosmetics
        ? this.allCosmetics
            .filter((x) => x.startsWith('clickeffects_'))
            .map((x) => removeSnakeCaseString(x.replace('clickeffects_', ''))) || []
        : [];
    }
    return this.clickfx;
  }
}
module.exports = PlayerCosmetics;
