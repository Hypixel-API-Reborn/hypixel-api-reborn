/**
 * Friend class
 */
class Friend {
  /**
   * @param {object} data Friend data
   * @param {string} uuid UUID of player from whom the data is retrieved from
   */
  constructor (data, uuid) {
    /**
     * Friend request sender's UUID ( Whoever sent the FR ). This can be either the friend's or the player's uuid.
     * @type {string}
     */
    this.sender = data.uuidSender;
    /**
     * Friend request receiver's UUID ( Whoever received the FR ). This can be either the friend's or the player's uuid.
     * @type {string}
     */
    this.receiver = data.uuidReceiver;
    /**
     * Friend's UUID
     * @type {string}
     */
    this.uuid = this.sender === uuid ? this.receiver : this.sender;
    /**
     * Friend since timestamp
     * @type {number}
     */
    this.friendSinceTimestamp = data.started;
    /**
     * Friend since as Date
     * @type {Date}
     */
    this.friendSince = new Date(data.started);
  }
}

module.exports = Friend;
