import Errors from '../Errors.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import type { DuelsTitleName, DuelsTitleParsed } from '../Types/Player.js';

export function Romanize(num: number | string): string {
  const digits = String(Number(num)).split('');
  const key = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX'
  ];
  let roman = '';
  let i = 3;
  while (i--) {
    roman = (key[Number(digits.pop()) + i * 10] || '') + roman;
  }
  return Array(Number(digits.join('') + 1)).join('M') + roman;
}

export function ParseModeBefore(mode?: string): string {
  return mode?.trim() ? `${mode.trim().replace(/_+$/, '')}_` : '';
}

export function ParseModeAfter(mode?: string): string {
  return mode?.trim() ? `_${mode.trim().replace(/^_+/, '')}` : '';
}

export function ParseModeBeforeAfter(mode?: string): string {
  return mode?.trim() ? `_${mode.trim().replace(/^_+|_+$/g, '')}_` : '';
}

export const DuelsDivisionsRequirements: Record<DuelsTitleName, { req: number; step: number; max: number }> = {
  None: { req: 0, step: 0, max: 5 },
  Rookie: { req: 50, step: 10, max: 5 },
  Iron: { req: 100, step: 30, max: 5 },
  Gold: { req: 250, step: 50, max: 5 },
  Diamond: { req: 500, step: 100, max: 5 },
  Master: { req: 1000, step: 200, max: 5 },
  Legend: { req: 2000, step: 600, max: 5 },
  Grandmaster: { req: 5000, step: 1000, max: 5 },
  Godlike: { req: 10_000, step: 3000, max: 5 },
  CELESTIAL: { req: 25_000, step: 5000, max: 5 },
  DIVINE: { req: 50_000, step: 10_000, max: 5 },
  ASCENDED: { req: 100_000, step: 10_000, max: 20 }
};

export function getDuelsTitle(score: number, isAllModes: boolean = false): DuelsTitleParsed {
  const divisions = Object.entries(DuelsDivisionsRequirements).map(([title, data]) => ({
    title: title,
    req: isAllModes ? data.req * 2 : data.req,
    step: isAllModes ? data.step * 2 : data.step,
    max: data.max
  }));

  const titleData =
    divisions.find(({ req }, index) => score >= req && score < (divisions[index + 1]?.req ?? Infinity)) ?? divisions[0];

  if (!titleData) throw new HypixelAPIRebornError(Errors.INVALID_DUELS_TITLE_REQUIREMENT);

  const { req, step, title, max } = titleData;
  const division = Math.min(max, step ? Math.floor((score - req) / step) + 1 : 1);
  return `${title}${division > 1 ? ` ${Romanize(division)}` : ''}` as DuelsTitleParsed;
}
