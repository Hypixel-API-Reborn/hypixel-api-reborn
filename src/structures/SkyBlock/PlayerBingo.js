const { populateGoals } = require('../../utils/SkyblockUtils');
// eslint-disable-next-line no-unused-vars
const BingoDataType = require('./Static/BingoData.js');
// eslint-disable-next-line no-unused-vars
const BingoType = require('./Static/Bingo.js');
/**
 * @typedef {BingoDataType} BingoData
 * @typedef {BingoType} Bingo
 */

/**
 * Player Bingo Class
 */
class PlayerBingo {
  /**
   * Constructor
   * @param {Object} data data
   * @param {BingoData|null} bingoData bingo data
   * @example
   */
  constructor(data, bingoData) {
    const events = data.success && Array.isArray(data.events) ? data.events : [];
    /**
     * Data per event
     * @type {PlayerBingoDataPerEvent}
     */
    this.dataPerEvent = events.map((eventData) => {
      let doneGoals = eventData.completed_goals;
      if (!Array.isArray(doneGoals)) doneGoals = [];
      const enrichable = parseInt(eventData.key, 10) === bingoData?.id;
      if (enrichable) doneGoals = populateGoals(doneGoals, bingoData.goals);
      return {
        eventId: parseInt(eventData.key, 10) || null,
        points: parseInt(eventData.points, 10) || 0,
        goalsCompleted: doneGoals,
        enrichedGoals: enrichable
      };
    });
  }
}

/**
 * @typedef {Object} PlayerBingoDataPerEvent
 * @property {number} eventId ID of event
 * @property {number} points Points acquired
 * @property {boolean} enrichedGoals Whether the goals are enriched (populated with data from static skyblock bingp data)
 * @property {Bingo[]|string[]} goalsCompleted Special Bingo Array if enrichedGoals is true. You can however always treat SpecialBingoArray as string[]
 */

module.exports = PlayerBingo;
