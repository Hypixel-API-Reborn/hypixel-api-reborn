/**
 * Game challenges class
 */
class GameChallenges {
  /**
   * @param {string} name game name
   * @param {object} data data
   */
  constructor(name, data) {
    /**
     * Name of game/category
     * @type {StaticGameNames}
     */
    this.category = name;
    /**
     * @type {Map<string, ChallengeData>}
     */
    this.challenges = new Map();

    data.forEach((challenge) => {
      const content = {
        id: challenge.id,
        name: challenge.name,
        reward: parseInt(challenge.rewards[0].amount, 10) || 0,
        rewardType: challenge.rewards[0].type
      };
      this.challenges.set(challenge.id, content);
    });
  }
}

/**
 * @typedef {Object} ChallengeData
 * @property {string} id String ID of the challenge
 * @property {string} name String name of the challenge
 * @property {number} reward Amount of XP upon challenge completion, always 3700 XP.
 * @property {string} rewardType Type of reward. Always "MultipliedExperienceReward" here
 */

module.exports = GameChallenges;
