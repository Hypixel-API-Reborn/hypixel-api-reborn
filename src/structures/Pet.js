const Utils = require('../utils');
/**
 * Pet Class
 */
class Pet {
  /**
   * @param {string} name Name of pet
   * @param {object} data data
   * @example
   */
  constructor(name, data) {
    /**
     * Is Pet Favorite
     * @type {boolean}
     */
    this.isFavorite = data.vanityFavorites ? Boolean(data.vanityFavorites.includes(name.toUpperCase())) : false;
    name = name.replace('pet_', '');
    /**
     * Official Name of the pet
     * @type {string}
     */
    this.name = Utils.removeSnakeCase.recursive(name) || null;
    /**
     * Is Active Pet
     * @type {boolean}
     */
    this.active = data.currentPet === name.toUpperCase();
    const stats = data.petStats && data.petStats[name.toUpperCase()];
    /**
     * Stats of the pet, if any
     * @type {object}
     */
    if (!stats) return;
    /**
     * Hunger value ( 100 is highest )
     * @type {?number}
     */
    this.hunger = stats.HUNGER ? stats.HUNGER.value : null;
    /**
     * Last time the pet was fed ( timestamp )
     * @type {?number}
     */
    this.lastFed = stats.HUNGER ? stats.HUNGER.timestamp : null;
    /**
     * Last time the pet was fed ( Date )
     * @type {?Date}
     */
    this.lastFedAt = this.lastFed ? new Date(this.lastFed) : null;
    /**
     * Thirst value ( 100 is highest )
     * @type {?number}
     */
    this.thirst = stats.THIRST ? stats.THIRST.value : null;
    /**
     * Last time the pet drank ( timestamp )
     * @type {?number}
     */
    this.lastDrank = stats.THIRST ? stats.THIRST.timestamp : null;
    /**
     * Last time the pet drank ( Date )
     * @type {?Date}
     */
    this.lastDrankAt = this.lastDrank ? new Date(this.lastDrank) : null;
    /**
     * Exercise/Entertainment value ( 100 is highest )
     * @type {?number}
     */
    this.exercise = stats.EXERCISE ? stats.EXERCISE.value : null;
    /**
     * Last time the pet was exercised ( timestamp )
     * @type {?number}
     */
    this.lastExercised = stats.EXERCISE ? stats.EXERCISE.timestamp : null;
    /**
     * Last time the pet exercised ( Date )
     * @type {?Date}
     */
    this.lastExercisedAt = this.lastExercised ? new Date(this.lastExerciced) : null;
    /**
     * Raw Nickname, if any
     * @type {?string}
     */
    this.rawNickname = stats.name || null;
    /**
     * Nickname in plain text, if any
     * @type {?string}
     */
    this.nickname = stats.name ? stats.name.replace(/§([0-9]|[a-f])|§/gm, '') : null;
    /**
     * Pet experience
     * @type {number}
     */
    this.experience = stats.experience || 0;
  }
}

module.exports = Pet;
