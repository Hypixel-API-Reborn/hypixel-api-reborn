import type { ExpHistory } from '../../Types/Guild.js';
import type { UUID } from '../../Types/Global.js';
declare class GuildMember {
    uuid: UUID;
    joinedAtTimestamp: number | null;
    joinedAt: Date | null;
    questParticipation: number;
    rank: string;
    mutedUntilTimestamp: number | null;
    mutedUntil: Date | null;
    expHistory: ExpHistory[];
    weeklyExperience: number;
    constructor(data: Record<string, any>);
    toString(): string;
}
export default GuildMember;
//# sourceMappingURL=GuildMember.d.ts.map