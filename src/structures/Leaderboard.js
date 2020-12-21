/**
 * Leaderboard class
 * @param {object} data Leaderboard data
 */
class Leaderboard {
  constructor (data) {
    /**
     * Leaderboard name
     * @type {string|null}
     */
    this.name = data.prefix || null;
    /**
     * Leaderboard title
     * @type {string}
     */
    this.title = data.title || null;
    /**
     * Leaderboard player count
     * @type {string}
     */
    this.playerCount = data.count || 0;
    /**
     * Leaderboard leaders. Array of Player UUIDs
     * @type {string[]}
     */
    this.leaders = data.leaders || [];
  }
};
module.exports = Leaderboard;
