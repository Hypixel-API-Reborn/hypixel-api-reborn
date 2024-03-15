/* eslint-disable camelcase */
const constants = require('./Constants');
module.exports = {
  async decode(base64, isBuffer = false) {
    const nbt = require('prismarine-nbt');
    const parseNbt = require('util').promisify(nbt.parse);
    const buffer = isBuffer ? base64 : Buffer.from(base64, 'base64');
    let data = await parseNbt(buffer);
    data = nbt.simplify(data);
    const newdata = [];
    for (let i = 0; i < data.i.length; i++) {
      newdata.push(data.i[i]);
    }
    return newdata;
  },
  getLevelByXp(xp, type, levelCap) {
    let xpTable;
    switch (type) {
      case 'runecrafting':
        xpTable = constants.runecrafting_xp;
        break;
      case 'dungeons':
        xpTable = constants.dungeon_xp;
        break;
      case 'hotm':
        xpTable = constants.hotm_xp;
        break;
      default:
        xpTable = constants.leveling_xp;
    }
    let maxLevel = Math.max(...Object.keys(xpTable));
    if ((constants.skills_cap[type] ?? maxLevel) > maxLevel) {
      xpTable = Object.assign(constants.xp_past_50, xpTable);
      maxLevel = typeof levelCap === 'number' ? maxLevel + levelCap : Math.max(...Object.keys(xpTable));
    }
    if (isNaN(xp)) {
      return {
        xp: 0,
        level: 0,
        maxLevel,
        xpCurrent: 0,
        xpForNext: xpTable[1],
        progress: 0
      };
    }
    let xpTotal = 0;
    let level = 0;
    let xpForNext = 0;
    for (let x = 1; x <= maxLevel; x++) {
      if (!xpTable[x]) continue;
      xpTotal += xpTable[x];
      if (xpTotal > xp) {
        xpTotal -= xpTable[x];
        break;
      } else {
        level = x;
      }
    }
    const xpCurrent = Math.floor(xp - xpTotal);
    if (level < maxLevel) xpForNext = Math.ceil(xpTable[level + 1]);
    const progress = Math.floor(Math.max(0, Math.min(xpCurrent / xpForNext, 1)) * 100 * 10) / 10;

    return {
      xp,
      level,
      maxLevel,
      xpCurrent,
      xpForNext,
      progress
    };
  },
  getLevelByAchievement(achievementLevel, type) {
    let xpTable = constants.leveling_xp;
    let maxLevel = Math.max(...Object.keys(xpTable));
    if (constants.skills_cap[type] > maxLevel && type in constants.skills_achievements) {
      xpTable = Object.assign(constants.xp_past_50, xpTable);
      maxLevel = Math.max(...Object.keys(xpTable));
    }
    if (isNaN(achievementLevel)) {
      return {
        xp: 0,
        level: 0,
        maxLevel,
        xpCurrent: 0,
        xpForNext: xpTable[1],
        progress: 0
      };
    }
    let xpTotal = 0;
    let xpForNext = 0;
    for (let x = 1; x <= achievementLevel; x++) {
      xpTotal += xpTable[x];
    }
    if (achievementLevel < maxLevel) xpForNext = Math.ceil(xpTable[achievementLevel + 1]);
    return {
      xp: xpTotal,
      level: achievementLevel,
      maxLevel,
      xpCurrent: 0,
      xpForNext,
      progress: 0
    };
  },
  getSlayerLevel(slayer) {
    if (!slayer) {
      return {
        xp: 0,
        tier1: 0,
        tier2: 0,
        tier3: 0,
        tier4: 0,
        tier5: 0,
        level: 0
      };
    }
    const { claimed_levels } = slayer;
    let level = 0;
    for (const level_name in claimed_levels) {
      if (Object.prototype.hasOwnProperty.call(claimed_levels, level_name)) {
        const _level = parseInt(level_name.replace('_special', '').split('_').pop(), 10);
        if (_level > level) {
          level = _level;
        }
      }
    }
    return {
      xp: slayer.xp || 0,
      tier1: slayer.boss_kills_tier_0 || 0,
      tier2: slayer.boss_kills_tier_1 || 0,
      tier3: slayer.boss_kills_tier_2 || 0,
      tier4: slayer.boss_kills_tier_3 || 0,
      tier5: slayer.boss_kills_tier_4 || 0,
      level
    };
  },
  getSlayerLevelByXp(xp) {
    const { slayer_xp } = constants;
    const maxLevel = Math.max(...Object.keys(slayer_xp));
    let level = 0;
    for (let x = 1; x <= maxLevel && slayer_xp[x] <= xp; x++) {
      level = x;
    }
    return level;
  },
  getBonusStat(level, skill, max, incremention) {
    const skill_stats = constants.bonus_stats[skill];
    const steps = Object.keys(skill_stats)
      .sort((a, b) => Number(a) - Number(b))
      .map((a) => Number(a));
    const bonus = Object.assign({}, constants.stat_template);
    for (let x = steps[0]; x <= max; x += incremention) {
      if (level < x) {
        break;
      }
      const skill_step = steps
        .slice()
        .reverse()
        .find((a) => a <= x);
      const skill_bonus = skill_stats[skill_step];
      for (const skill in skill_bonus) {
        if (Object.prototype.hasOwnProperty.call(skill_bonus, skill)) {
          bonus[skill] += skill_bonus[skill];
        }
      }
    }
    return bonus;
  },
  getEffectiveHealth(health, defense) {
    if (defense <= 0) return health;
    return Math.round(health * (1 + defense / 100));
  },
  getMemberStats(obj) {
    return Object.keys(obj).reduce(
      (result, currentKey) => {
        const key = currentKey.replace(/_[a-z]/gi, (match) => match[1].toUpperCase());

        if (currentKey.startsWith('kills') || currentKey.startsWith('deaths')) {
          const category = currentKey.startsWith('kills') ? 'kills' : 'deaths';
          const subKey = key === category ? 'total' : key;

          result[category][
            subKey.replace(category, (sub, _, key) => {
              return key[sub.length].toLowerCase() + key.slice(sub.length + 1);
            })
          ] = obj[currentKey];
        } else {
          result[key] = obj[currentKey];
        }

        return result;
      },
      { kills: {}, deaths: {} }
    );
  },
  getTrophyFishRank(level) {
    if (level === 1) {
      return 'Bronze';
    } else if (level === 2) {
      return 'Silver';
    } else if (level === 3) {
      return 'Gold';
    } else if (level === 4) {
      return 'Diamond';
    } else {
      return 'Zero';
    }
  }
};
