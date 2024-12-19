import type { LevelProgress, PlayerRank } from '../Types/Player.js';

export function getRank(player: Record<string, any>): PlayerRank {
  if (player.prefix) {
    switch (player.prefix.replace(/§[0-9|a-z]|\[|\]/g, '')) {
      case 'EVENTS':
        return 'Events';
      case 'MOJANG':
        return 'Mojang';
      case 'PIG+++':
        return 'PIG+++';
      case 'INNIT':
        return 'Innit';
      default:
        return null;
    }
  } else if (player.rank) {
    switch (player.rank) {
      case 'ADMIN':
        return 'Admin';
      case 'GAME_MASTER':
        return 'Game Master';
      default:
        return null;
    }
  } else {
    switch (player.newPackageRank) {
      case 'MVP_PLUS':
        return 'SUPERSTAR' !== player.monthlyPackageRank ? 'MVP+' : 'MVP++';
      case 'MVP':
        return 'MVP';
      case 'VIP_PLUS':
        return 'VIP+';
      case 'VIP':
        return 'VIP';
      default:
        return null;
    }
  }
}

export function getPlayerLevel(exp: number): number {
  const base = 10000;
  const growth = 2500;
  const reversePqPrefix = -(base - 0.5 * growth) / growth;
  const reverseConst = reversePqPrefix * reversePqPrefix;
  const growthDivides2 = 2 / growth;
  const num = 1 + reversePqPrefix + Math.sqrt(reverseConst + growthDivides2 * exp);
  const level = Math.round(num * 100) / 100;
  return level;
}

export function xpToNextLevel(xp: number): number {
  const lvl = getPlayerLevel(xp);
  const xpToNext = 2500 * Math.floor(lvl) + 5000;
  if (10000 > xp) return 10000;
  return xpToNext;
}

export function levelToXP(xp: number): number {
  let level = Number(Math.floor(getPlayerLevel(xp)));
  level = level - 1;
  return 1250 * level ** 2 + 8750 * level;
}

export function playerLevelProgress(xp: number): LevelProgress {
  const xpFromLevel = levelToXP(xp);
  let currentXP = xp - xpFromLevel;
  const xpToNext = xpToNextLevel(xp);
  const remainingXP = xpToNext - currentXP + 2500;
  currentXP = currentXP - 2500;
  const percent = Math.round((currentXP / xpToNext) * 100 * 100) / 100;
  const percentRemaining = Math.round((100 - percent) * 100) / 100;
  return {
    level: getPlayerLevel(xp),
    xpToNext,
    remainingXP,
    currentXP,
    percent,
    percentRemaining
  };
}

export function parseClaimedRewards(data: Record<string, any>): number[] {
  return Object.keys(data)
    .map((x) => x.match(/levelingReward_(\d+)/))
    .filter((x) => x)
    .map((x) => (x ? parseInt(x?.[1] || '0', 10) : null))
    .filter((x) => null !== x);
}
