import Color from '../Color.js';
import Game from '../Game.js';
import GuildMember from './GuildMember.js';
import GuildRank from './GuildRank.js';
import type RequestData from '../../Private/RequestData.js';
import type { ExpHistory } from '../../Types/Guild.js';
declare class Guild {
    id: string;
    name: string;
    description: string;
    experience: number;
    level: number;
    members: GuildMember[];
    me: GuildMember | null;
    ranks: GuildRank[];
    totalWeeklyGEXP: number;
    createdAtTimestamp: number | null;
    createdAt: Date | null;
    joinable: boolean;
    publiclyListed: boolean;
    chatMuteUntilTimestamp: number | null;
    chatMuteUntil: Date | null;
    banner: {
        Pattern: string;
        Color: string;
    }[];
    tag: string;
    tagColor: Color | null;
    expHistory: ExpHistory[];
    achievements: {
        winners: number;
        experienceKings: number;
        onlinePlayers: number;
    };
    preferredGames: Game[];
    constructor(data: Record<string, any>, uuid?: string);
    toString(): string;
    isRaw(): this is RequestData;
}
export default Guild;
//# sourceMappingURL=Guild.d.ts.map