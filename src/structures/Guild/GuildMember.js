class GuildMember {
  constructor (data) {
    this.uuid = data.uuid;
    this.joinedAt = data.joined;
    this.questParticipation = data.questParticipation || 0;
    this.rank = data.rank;
    this.mutedUntil = data.mutedTill ? data.mutedTill : null;
    var gexp = 0;
    var history = [];
    if (Object.keys(data.expHistory).length) {
      for (const day in data.expHistory) {
        gexp += data.expHistory[day];
        history.push({ day: day, exp: data.expHistory[day] });
      }
    }
    this.expHistory = history;
    this.weeklyExperience = gexp;
  }
}
module.exports = GuildMember;
