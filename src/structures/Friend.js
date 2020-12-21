/**
 * Friend class
 * @param {object} data Friend data
 */
class Friend {
  constructor (data) {
    /**
     * Friend request sender UUID
     * @type {string}
     */
    this.sender = data.uuidSender;
    /**
     * Friend request receiver UUID
     * @type {string}
     */
    this.receiver = data.uuidReceiver;
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
