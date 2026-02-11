import { parseHistory } from '../../Utils/Guild.js';
class GuildMember {
    uuid;
    joinedAtTimestamp;
    joinedAt;
    questParticipation;
    rank;
    mutedUntilTimestamp;
    mutedUntil;
    expHistory;
    weeklyExperience;
    constructor(data) {
        this.uuid = data.uuid || '';
        this.joinedAtTimestamp = data?.joined || null;
        this.joinedAt = this.joinedAtTimestamp ? new Date(this.joinedAtTimestamp) : null;
        this.questParticipation = data?.questParticipation || 0;
        this.rank = data?.rank || 'Member';
        this.mutedUntilTimestamp = data?.mutedTill || null;
        this.mutedUntil = this.mutedUntilTimestamp ? new Date(this.mutedUntilTimestamp) : null;
        const xpCheck = data.expHistory && typeof Object.values(data.expHistory)[0] === 'number';
        this.expHistory = parseHistory(data?.expHistory || {});
        this.weeklyExperience = xpCheck
            ? Number(Object.values(data.expHistory).reduce((pV, cV) => pV + cV, 0))
            : 0;
    }
    toString() {
        return this.uuid;
    }
}
export default GuildMember;
//# sourceMappingURL=GuildMember.js.map