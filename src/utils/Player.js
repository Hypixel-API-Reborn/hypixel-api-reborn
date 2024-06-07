/* eslint-disable jsdoc/require-jsdoc */
function getRank(player) {
  let rank;
  if (player.prefix) {
    rank = player.prefix.replace(/§[0-9|a-z]|\[|\]/g, '');
  } else if (player.rank && 'NORMAL' !== player.rank) {
    switch (player.rank) {
      case 'YOUTUBER':
        rank = 'YouTube';
        break;
      case 'GAME_MASTER':
        rank = 'Game Master';
        break;
      case 'ADMIN':
        rank = 'Admin';
        break;
      default:
        rank = '';
        break;
    }
  } else {
    switch (player.newPackageRank) {
      case 'MVP_PLUS':
        rank = player.monthlyPackageRank && 'SUPERSTAR' === player.monthlyPackageRank ? 'MVP++' : 'MVP+';
        break;
      case 'MVP':
        rank = 'MVP';
        break;
      case 'VIP_PLUS':
        rank = 'VIP+';
        break;
      case 'VIP':
        rank = 'VIP';
        break;
      default:
        rank = player.monthlyPackageRank && 'SUPERSTAR' === player.monthlyPackageRank ? 'MVP++' : 'Default';
    }
  }
  return rank;
}

function getPlayerLevel(exp) {
  const base = 10000;
  const growth = 2500;
  const reversePqPrefix = -(base - 0.5 * growth) / growth;
  const reverseConst = reversePqPrefix * reversePqPrefix;
  const growthDivides2 = 2 / growth;
  const num = 1 + reversePqPrefix + Math.sqrt(reverseConst + growthDivides2 * exp);
  const level = Math.round(num * 100) / 100;
  return level;
}

function xpToNextLevel(player) {
  const lvl = getPlayerLevel(player.networkExp);
  const xpToNext = 2500 * Math.floor(lvl) + 5000;
  if (10000 > player.networkExp) return 10000;
  return xpToNext;
}

function levelToXP(player) {
  let level = Number(Math.floor(getPlayerLevel(player.networkExp)));
  level = level - 1;
  const xp = 1250 * level ** 2 + 8750 * level;
  return xp;
}

function playerLevelProgress(player) {
  const xpFromLevel = levelToXP(player);
  let currentXP = player.networkExp - xpFromLevel;
  const xpToNext = xpToNextLevel(player);
  const remainingXP = xpToNext - currentXP + 2500;
  currentXP = currentXP - 2500;
  const percent = Math.round((currentXP / xpToNext) * 100 * 100) / 100;
  const percentRemaining = Math.round((100 - percent) * 100) / 100;
  return {
    xpToNext,
    remainingXP,
    currentXP,
    percent,
    percentRemaining
  };
}

function getSocialMedia(data) {
  if (!data) return null;
  const links = data.links;
  const formattedNames = ['Twitter', 'YouTube', 'Instagram', 'Twitch', 'Hypixel', 'Discord'];
  const upperNames = ['TWITTER', 'YOUTUBE', 'INSTAGRAM', 'TWITCH', 'HYPIXEL', 'DISCORD'];
  if (!links) return null;
  return Object.keys(links)
    .map((x) => upperNames.indexOf(x))
    .filter((x) => -1 !== x)
    .map((x) => ({ name: formattedNames[x], link: links[upperNames[x]], id: upperNames[x] }));
}

function parseClaimedRewards(data) {
  if (!data) return null;
  return Object.keys(data)
    .map((x) => x.match(/levelingReward_(\d+)/))
    .filter((x) => x)
    .map((x) => parseInt(x[1], 10));
}

module.exports = {
  getRank,
  getPlayerLevel,
  xpToNextLevel,
  levelToXP,
  playerLevelProgress,
  getSocialMedia,
  parseClaimedRewards
};
