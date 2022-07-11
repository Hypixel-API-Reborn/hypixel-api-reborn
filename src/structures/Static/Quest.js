/**
 * Quest Class
 */
class Quest {
  /**
   * constructor
   * @param {Object} data
   */
  constructor(data) {
    /**
     * Name of quest, trimmed trailing spaces
     * @type {string}
     */
    this.questName = data.name.trim();
    /**
     * ID of quest
     * @type {string}
     */
    this.questID = data.id;
    /**
     * Description, trimmed trailing spaces
     * @type {string}
     */
    this.description = data.description.trim();
    /**
     * Type of quest
     * @type {'DAILY'|'WEEKLY'}
     */
    this.type = data.requirements?.[0].type === 'DailyResetQuestRequirement' ? 'DAILY' : 'WEEKLY';
    /**
     * Objectives
     * @type {Objective[]}
     */
    this.objectives = data.objectives.map((objective) => ({
      id: objective.id,
      type: objective.type === 'IntegerObjective' ? 'Integer' : 'Boolean',
      amountNeeded: parseInt(objective.integer || '1', 10)
    }));
    /**
     * Rewards for this quest
     * @type {QuestReward[]}
     */
    this.rewards = data.rewards || [];
  }
  /**
   * As string
   * @return {string}
   */
  toString() {
    return this.questName;
  }
}

/**
 * @typedef {Object} Objective
 * @property {string} id ID
 * @property {'Integer'|'Boolean'} type Integer: a certain amount of something (i.e kills) is needed; Boolean: a condition needs to be fulfilled
 * @property {number} amountNeeded a Boolean-typed objective will have this set to 1. (instead of null in API)
 */
/**
 * @typedef {Object} QuestReward
 * @property {string} type Types of reward.
 * @property {number} amount Amount
 */

module.exports = Quest;
