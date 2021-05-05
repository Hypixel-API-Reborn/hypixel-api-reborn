const Pets = require('./Pets');
const { removeSnakeCaseString } = require('../utils/removeSnakeCase');
/**
 * Player Cosmetics class
 */
class PlayerCosmetics {
  /**
   * @param {object} data data
   */
  constructor (data) {
    /**
     * All cosmetics
     * @type {string[]}
     */
    this.allCosmetics = data.vanityMeta ? data.vanityMeta.packages : undefined;
    /**
     * Pets
     * @type {Pets|null}
     */
    this.petManager = this.allCosmetics ? new Pets(this.allCosmetics.filter((x) => x.startsWith('pet_')), data) : null;
  }
  /**
   * Suits
   * @type {string[]}
   */
  get suits () {
    if (!this._suits) this._suits = this.allCosmetics ? this.allCosmetics.filter((x) => x.startsWith('suit_')).map((x) => removeSnakeCaseString(x.replace('suit_', ''))) || [] : [];
    return this._suits;
  }
  /**
   * Hats
   * @type {string[]}
   */
  get hats () {
    if (!this._hats) this._hats = this.allCosmetics ? this.allCosmetics.filter((x) => x.startsWith('hat_')).map((x) => removeSnakeCaseString(x.replace('hat_', ''))) || [] : [];
    return this._hats;
  }
  /**
   * Gadgets
   * @type {string[]}
   */
  get gadgets () {
    if (!this._gadgets) this._gadgets = this.allCosmetics ? this.allCosmetics.filter((x) => x.startsWith('gadget_')).map((x) => removeSnakeCaseString(x.replace('gadget_', ''))) || [] : [];
    return this._gadgets;
  }
  /**
   * Morphs
   * @type {string[]}
   */
  get morphs () {
    if (!this._morphs) this._morphs = this.allCosmetics ? this.allCosmetics.filter((x) => x.startsWith('morph_')).map((x) => removeSnakeCaseString(x.replace('morph_', ''))) || [] : [];
    return this._morphs;
  }
  /**
   * Cloaks
   * @type {string[]}
   */
  get cloaks () {
    if (!this._cloaks) this._cloaks = this.allCosmetics ? this.allCosmetics.filter((x) => x.startsWith('cloak_')).map((x) => removeSnakeCaseString(x.replace('cloak_', ''))) || [] : [];
    return this._cloaks;
  }
  /**
   * Taunts
   * @type {string[]}
   */
  get taunts () {
    if (!this._taunts) this._taunts = this.allCosmetics ? this.allCosmetics.filter((x) => x.startsWith('taunt_')).map((x) => removeSnakeCaseString(x.replace('taunt_', ''))) || [] : [];
    return this._taunts;
  }
  /**
   * rankColors
   * @type {string[]}
   */
  get rankColors () {
    if (!this._rankcolors) this._rankcolors = this.allCosmetics ? this.allCosmetics.filter((x) => x.startsWith('rankcolor_')).map((x) => removeSnakeCaseString(x.replace('rankcolor_', ''))) || [] : [];
    return this._rankcolors;
  }
  /**
   * Particle Packs
   * @type {string[]}
   */
  get particlePacks () {
    if (!this._particle) this._particle = this.allCosmetics ? this.allCosmetics.filter((x) => x.startsWith('particlepack_')).map((x) => removeSnakeCaseString(x.replace('particlepack_', ''))) || [] : [];
    return this._particlepacks;
  }
  /**
   * Click Effects
   * @type {string[]}
   */
  get clickEffects () {
    if (!this._clickfx) this._clickfx = this.allCosmetics ? this.allCosmetics.filter((x) => x.startsWith('clickeffects_')).map((x) => removeSnakeCaseString(x.replace('clickeffects_', ''))) || [] : [];
    return this._clickfx;
  }
}
module.exports = PlayerCosmetics;
