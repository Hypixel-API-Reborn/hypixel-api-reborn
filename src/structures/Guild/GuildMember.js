class GuildMember {
  constructor (data) {
    this.uuid = data.uuid;
    this.joinedAtTimestamp = data.joined;
    this.joinedAt = new Date(data.joined);
    this.questParticipation = data.questParticipation || 0;
    this.rank = data.rank;
    this.mutedUntilTimestamp = data.mutedTill ? data.mutedTill : null;
    this.mutedUntil = data.mutedTill ? new Date(data.mutedTill) : null;
    let gexp = 0;
    const history = [];
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
