import GuildMember from '../Structures/Guild/GuildMember.js';
import GuildRank from '../Structures/Guild/GuildRank.js';
import type { ExpHistory } from '../Types/Guild.js';

const dateRegExp = /(\d{4})-(\d{2})-(\d{2})/;
export function parseDate(date: Record<string, any>) {
  date[1] -= 1;
  return new Date(
    Math.round(new Date(new Date().setUTCFullYear(...(date as [any]))).setUTCHours(5, 0, 0) / 1000) * 1000
  );
}

export function parseHistory(historyData: Record<string, any>): ExpHistory[] {
  return Object.entries(historyData).map((x, index) => ({
    day: x[0],
    date: x[0].match(dateRegExp)
      ? parseDate(
        x[0]
          .match(dateRegExp)!
          .slice(1)
          .map((x) => parseInt(x, 10))
      )
      : undefined,
    exp: x[1] || 0,
    totalExp:
      Object.values(historyData)
        .slice(0, index + 1)
        .reduce((pV: any, cV: any) => pV + cV, 0) || 0
  }));
}

export function getGuildLevel(exp: number) {
  const EXP_NEEDED: number[] = [
    100000,
    150000,
    250000,
    500000,
    750000,
    1000000,
    1250000,
    1500000,
    2000000,
    2500000,
    2500000,
    2500000,
    2500000,
    2500000,
    3000000
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

export function ranks(data: Record<string, any>) {
  return data.ranks && data.ranks.length
    ? data.ranks.map((r: any) => new GuildRank(r)).sort((a: any, b: any) => a.priority - b.priority)
    : [];
}

export function expLimit(exp: number) {
  return exp > 2e5 ? (exp > 7e5 ? 2.5e5 + Math.round(exp * 0.03) : 2e5 + Math.round((exp - 2e5) / 10)) : exp;
}

export function calculateExpHistory(data: GuildMember[]): ExpHistory[] {
  const finalObj: Record<string, number> = {};
  if (undefined === data[0]?.expHistory) return [];
  Object.keys(data[0].expHistory).forEach((day, index) => {
    let GEXP = 0;
    data.forEach((member) => (GEXP += member.expHistory?.[index]?.exp || 0));
    finalObj[data[0]?.expHistory[index]?.day || 'Unknown'] = expLimit(GEXP);
  });
  return parseHistory(finalObj);
}

export function members(data: Record<string, any>): GuildMember[] {
  return data.length ? data.map((m: Record<string, any>) => new GuildMember(m)) : [];
}

export function totalWeeklyGEXP(data: GuildMember[]): number {
  let GEXP: number = 0;
  data.forEach((member) => (GEXP += member.weeklyExperience));
  return GEXP;
}
