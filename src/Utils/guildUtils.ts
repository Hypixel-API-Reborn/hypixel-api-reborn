import type { ExpHistory } from '../Types/index.js';

export const guildDateRegex = /(\d{4})-(\d{2})-(\d{2})/;
export function parseGuildHistoryDate(date: Record<string, any>) {
  date[1] -= 1;
  return new Date(
    Math.round(new Date(new Date().setUTCFullYear(...(date as [any]))).setUTCHours(5, 0, 0) / 1000) * 1000
  );
}

export function parseGuildHistory(historyData: Record<string, any>): ExpHistory[] {
  return Object.entries(historyData).map((x, index) => ({
    day: x[0],
    date: x[0].match(guildDateRegex)
      ? parseGuildHistoryDate(
          x[0]
            .match(guildDateRegex)!
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
