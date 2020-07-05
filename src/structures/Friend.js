class Friend {
  constructor (data) {
    this.sender = data.uuidSender;
    this.receiver = data.uuidReceiver;
    this.friendSince = data.started;
  }
}

module.exports = Friend;
