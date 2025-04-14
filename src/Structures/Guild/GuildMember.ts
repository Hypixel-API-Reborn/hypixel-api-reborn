import { parseHistory } from '../../Utils/Guild.js';
import type { ExpHistory } from '../../Types/Guild.js';
import type { UUID } from '../../Types/Global.js';

class GuildMember {
  uuid: UUID;
  joinedAtTimestamp: number | null;
  joinedAt: Date | null;
  questParticipation: number;
  rank: string;
  mutedUntilTimestamp: number | null;
  mutedUntil: Date | null;
  expHistory: ExpHistory[];
  weeklyExperience: number;
  constructor(data: Record<string, any>) {
    this.uuid = data.uuid || '';
    this.joinedAtTimestamp = data?.joined || null;
    this.joinedAt = this.joinedAtTimestamp ? new Date(this.joinedAtTimestamp) : null;
    this.questParticipation = data?.questParticipation || 0;
    this.rank = data?.rank || 'Member';
    this.mutedUntilTimestamp = data?.mutedTill || null;
    this.mutedUntil = this.mutedUntilTimestamp ? new Date(this.mutedUntilTimestamp) : null;
    const xpCheck = data.expHistory && 'number' === typeof Object.values(data.expHistory)[0];
    this.expHistory = parseHistory(data?.expHistory || {});
    this.weeklyExperience = xpCheck
      ? Number(Object.values(data.expHistory).reduce((pV: any, cV: any) => pV + cV, 0))
      : 0;
  }

  toString(): string {
    return this.uuid;
  }
}

export default GuildMember;
