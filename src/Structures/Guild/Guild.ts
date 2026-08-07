import Color from '../Color.js';
import Game from '../Game.js';
import GuildMember from './GuildMember.js';
import GuildRank from './GuildRank.js';
import { parseGuildHistory } from '../../Utils/index.js';
import type { ExpHistory } from '../../Types/Guild.js';

class Guild {
  id: string;
  name: string;
  description: string;
  experience: number;
  level: number;
  members: GuildMember[];
  me: GuildMember | null;
  ranks: GuildRank[];
  createdAtTimestamp: number | null;
  createdAt: Date | null;
  joinable: boolean;
  publiclyListed: boolean;
  chatMuteUntilTimestamp: number | null;
  chatMuteUntil: Date | null;
  banner: { Pattern: string; Color: string }[];
  tag: string;
  tagColor: Color | null;
  achievements: { winners: number; experienceKings: number; onlinePlayers: number };
  preferredGames: Game[];
  constructor(data: Record<string, any>, uuid?: string) {
    // eslint-disable-next-line no-underscore-dangle
    this.id = data._id ?? 'UNKNOWN';
    this.name = data.name ?? 'UNKNOWN';
    this.description = data.description ?? '';
    this.experience = data.exp ?? 0;
    this.level = this.getGuildLevel(this.experience);
    this.members = (data?.members ?? [])
      .map((member: Record<string, any>) => new GuildMember(member))
      .sort((a: GuildMember, b: GuildMember) => a.joinedAt - b.joinedAt);
    this.me = uuid ? (this.members.find((member) => member.uuid === uuid) as GuildMember) : null;
    this.ranks = (data?.ranks ?? [])
      .map((rank: Record<string, any>) => new GuildRank(rank))
      .sort((a: GuildRank, b: GuildRank) => a.priority - b.priority);
    this.createdAtTimestamp = data.created ?? null;
    this.createdAt = this.createdAtTimestamp ? new Date(this.createdAtTimestamp) : null;
    this.joinable = data.joinable ?? false;
    this.publiclyListed = Boolean(data.publiclyListed);
    this.chatMuteUntilTimestamp = data.chatMute ?? null;
    this.chatMuteUntil = this.chatMuteUntilTimestamp ? new Date(this.chatMuteUntilTimestamp) : null;
    this.banner = data.banner ?? null;
    this.tag = data.tag ?? null;
    this.tagColor = data.tagColor ? new Color(data.tagColor) : null;
    this.achievements = {
      winners: data?.achievements?.WINNERS ?? 0,
      experienceKings: data?.achievements?.EXPERIENCE_KINGS ?? 0,
      onlinePlayers: data?.achievements?.ONLINE_PLAYERS ?? 0
    };
    this.preferredGames = data.preferredGames ? data.preferredGames.map((g: any) => new Game(g)) : [];
  }

  toString(): string {
    return this.name;
  }

  get guildMaster() {
    return this.members.find((member) => member.rank === 'Guild Master' || member.rank === 'GUILDMASTER');
  }

  private getGuildLevel(exp: number) {
    const EXP_NEEDED: number[] = [
      100000, 150000, 250000, 500000, 750000, 1000000, 1250000, 1500000, 2000000, 2500000, 2500000, 2500000, 2500000,
      2500000, 3000000
    ];
    let level = 0;
    for (let i = 0; i <= 1000; i += 1) {
      let need: number;
      if (i >= EXP_NEEDED.length) {
        need = EXP_NEEDED[EXP_NEEDED.length - 1] || 0;
      } else {
        need = EXP_NEEDED[i] || 0;
      }
      if (exp - need < 0) {
        return Math.round((level + exp / need) * 100) / 100;
      }
      level += 1;
      exp -= need;
    }
    return 1000;
  }

  get totalWeeklyGEXP(): number {
    return this.members.reduce((total, member) => total + member.weeklyExperience, 0);
  }

  private expLimit(exp: number) {
    return exp > 2e5 ? (exp > 7e5 ? 2.5e5 + Math.round(exp * 0.03) : 2e5 + Math.round((exp - 2e5) / 10)) : exp;
  }

  get expHistory(): ExpHistory[] {
    const finalObj: Record<string, number> = {};
    if (undefined === this.members[0]?.expHistory) return [];
    Object.keys(this.members[0].expHistory).forEach((day, index) => {
      let GEXP = 0;
      this.members.forEach((member) => (GEXP += member.expHistory?.[index]?.exp || 0));
      finalObj[this.members[0]?.expHistory[index]?.day || 'UNKNOWN'] = this.expLimit(GEXP);
    });
    return parseGuildHistory(finalObj);
  }
}

export default Guild;
