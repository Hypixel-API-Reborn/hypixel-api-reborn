import GuildMember from '../Structures/Guild/GuildMember.js';
import type { ExpHistory } from '../Types/Guild.js';
export declare function parseDate(date: Record<string, any>): Date;
export declare function parseHistory(historyData: Record<string, any>): ExpHistory[];
export declare function getGuildLevel(exp: number): number;
export declare function ranks(data: Record<string, any>): any;
export declare function expLimit(exp: number): number;
export declare function calculateExpHistory(data: GuildMember[]): ExpHistory[];
export declare function members(data: Record<string, any>): GuildMember[];
export declare function totalWeeklyGEXP(data: GuildMember[]): number;
//# sourceMappingURL=Guild.d.ts.map