const GameIDs = require('./GameIDs');
class Booster {
	constructor(data) {
		this.purchaser = data['purchaserUuid'];
		this.amount = data['amount'];

		this.originalLength = data['originalLength'];
		this.remaining = data['length'];
		this.activated = data['dateActivated'];

		this.gameId = data['gameType'];
		this.game = GameIDs[this.gameId];
	}
}
module.exports = Booster;