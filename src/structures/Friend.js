class Friend {
  constructor (data) {
    this.sender = data.uuidSender;
    this.receiver = data.uuidReceiver;
    this.friendSinceTimestamp = data.started;
    this.friendSince = new Date(data.started);
  }
}

module.exports = Friend;
