class GuildMember {
    constructor(data) {
        this.uuid = data.uuid;
        this.joinedAt = data.joined;

        this.questParticipation = data.questParticipation

        this.rank = data.rank;
    }
}
module.exports = GuildMember;