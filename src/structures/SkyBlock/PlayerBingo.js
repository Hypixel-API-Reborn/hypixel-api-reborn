/**
 * @typedef {import('./Static/BingoData.js')} BingoData
 * @typedef {import('./Static/Bingo.js')} Bingo
 */

/**
 * Player Bingo Class
 */
class PlayerBingo {
  /**
   * Constructor
   * @param {Object} data data
   * @param {BingoData|null} bingoData bingo data
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
        enrichedGoals: enrichable,
      };
    });
  }
}

/**
 * Populate goals
 * For compatibility and lazy handling, uncompleted goals will be hidden in a property
 * @param {string[]} achieved achieved goals
 * @param {Bingo[]} all All goals
 * @returns {SpecialBingoArray}
 */
function populateGoals(achieved, all) {
  const populatedAchieved = [];
  const unachieved = [];
  for (const goal of all) {
    if (achieved.find((str) => str === goal.name)) populatedAchieved.push(goal);
    else unachieved.push(goal);
  }
  populatedAchieved.unachievedGoals = unachieved;
  return populatedAchieved;
}

/**
 * @typedef {Bingo[] & {'unachievedGoals': Bingo[]}} SpecialBingoArray
 */
/**
 * @typedef {Object} PlayerBingoDataPerEvent
 * @property {number} eventId ID of event
 * @property {number} points Points acquired
 * @property {boolean} enrichedGoals Whether the goals are enriched (populated with data from static skyblock bingp data)
 * @property {SpecialBingoArray|string[]} goalsCompleted Special Bingo Array if enrichedGoals is true. You can however always treat SpecialBingoArray as string[]
 */

module.exports = PlayerBingo;
