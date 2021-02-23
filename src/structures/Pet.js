const Utils = require('../utils');
/**
 * Pet Class
 */
class Pet {
  /**
   * @param {string} name Name of pet
   * @param {object} data data
   */
  constructor (name, data) {
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
    this.stats = {};
    if (!stats) return; // don't parse stats because there is none.
    /**
     * Hunger value ( 100 is highest )
     * @type {number|null}
     */
    this.stats.hunger = stats.HUNGER ? stats.HUNGER.value : null;
    /**
     * Last time the pet was fed ( timestamp )
     * @type {number|null}
     */
    this.stats.lastFed = stats.HUNGER ? stats.HUNGER.timestamp : null;
    /**
     * Last time the pet was fed ( Date )
     * @type {Date|null}
     */
    this.stats.lastFedAt = this.stats.lastFed ? new Date(this.stats.lastFed) : null;
    /**
     * Thirst value ( 100 is highest )
     * @type {number|null}
     */
    this.stats.thirst = stats.THIRST ? stats.THIRST.value : null;
    /**
     * Last time the pet drank ( timestamp )
     * @type {number|null}
     */
    this.stats.lastDrank = stats.THIRST ? stats.THIRST.timestamp : null;
    /**
     * Last time the pet drank ( Date )
     * @type {Date|null}
     */
    this.stats.lastDrankAt = this.stats.lastDrank ? new Date(this.stats.lastDrank) : null;
    /**
     * Exercise/Entertainment value ( 100 is highest )
     * @type {number|null}
     */
    this.stats.exercise = stats.EXERCISE ? stats.EXERCISE.value : null;
    /**
     * Last time the pet was exercised ( timestamp )
     * @type {number|null}
     */
    this.stats.lastExercised = stats.EXERCISE ? stats.EXERCISE.timestamp : null;
    /**
     * Last time the pet exercised ( Date )
     * @type {Date|null}
     */
    this.stats.lastExercisedAt = this.stats.lastExercised ? new Date(this.stats.lastExerciced) : null;
    /**
     * Raw Nickname, if any
     * @type {string|null}
     */
    this.rawNickname = stats.name || null;
    /**
     * Nickname in plain text, if any
     * @type {string|null}
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
