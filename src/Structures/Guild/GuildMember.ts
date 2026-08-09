import { parseGuildHistory } from '../../Utils/index.js';
import type { ExpHistory, UUID } from '../../Types/index.js';

class GuildMember {
  uuid: UUID;
  joinedAt: number;
  questParticipation: number;
  rank: string;
  mutedUntilTimestamp: number | null;
  mutedUntil: Date | null;
  expHistory: ExpHistory[];
  weeklyExperience: number;
  constructor(data: Record<string, any>) {
    this.uuid = data?.uuid ?? 'UNKNOWN';
    this.joinedAt = data?.joined ?? 0;
    this.questParticipation = data?.questParticipation ?? 0;
    this.rank = data?.rank ?? 'Member';
    this.mutedUntilTimestamp = data?.mutedTill ?? null;
    this.mutedUntil = this.mutedUntilTimestamp ? new Date(this.mutedUntilTimestamp) : null;
    const xpCheck = data.expHistory && typeof Object.values(data.expHistory)[0] === 'number';
    this.expHistory = parseGuildHistory(data?.expHistory ?? {});
    this.weeklyExperience = xpCheck
      ? Number(Object.values(data.expHistory).reduce((pV: any, cV: any) => pV + cV, 0))
      : 0;
  }

  toString(): string {
    return this.uuid;
  }
}

export default GuildMember;
