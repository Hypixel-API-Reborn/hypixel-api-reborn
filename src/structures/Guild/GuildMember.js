const Player = require('../Player');

class GuildMember extends Player {
  constructor (data) {
    super(data);
    this.uuid = data.uuid;
    this.joinedAt = data.joined;
    this.questParticipation = data.questParticipation || 0;
    this.guildRank = data.rank;
    var gexp = 0;
    if (data.expHistory) {
      for (const day in data.expHistory) {
        gexp += data.expHistory[day];
      }
    }
    this.weeklyExperience = gexp;
  }
}
module.exports = GuildMember;
