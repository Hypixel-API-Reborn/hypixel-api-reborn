const Game = require('./Game');
/**
 * Status class
 * @param {object} data Status data
 */
class Status {
  constructor (data) {
    /**
     * Player online status.<br>
     * <br>
     * Players can disable this endpoint via in-game settings. When done so the API will return as if the player is offline.
     * @type {boolean}
     */
    this.online = data.online;
    /**
     * Game type
     * @type {Game|null}
     */
    this.game = data.gameType ? new Game(data.gameType) : null;
    /**
     * Game mode
     * @type {string|null}
     */
    this.mode = data.mode ? data.mode : null;
    /**
     * Map
     * @type {string|null}
     */
    this.map = data.map ? data.map : null;
  }
}
module.exports = Status;
