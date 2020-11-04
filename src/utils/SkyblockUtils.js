/* eslint-disable camelcase */
const constants = require('./Constants');
module.exports = {
  async decode (base64) {
    const nbt = require('prismarine-nbt');
    const parseNbt = (require('util')).promisify(nbt.parse);
    const buffer = Buffer.from(base64, 'base64');
    let data = await parseNbt(buffer);
    data = nbt.simplify(data);
    const newdata = [];
    for (let i = 0; i < data.i.length; i++) {
      newdata.push(data.i[i]);
    }
    return newdata;
  },

  getLevelByXp (xp, type) {
    let xpTable;

    switch (type) {
      case 'runecrafting':
        xpTable = constants.runecrafting_xp;
        break;

      case 'dungeons':
        xpTable = constants.dungeon_xp;
        break;

      default:
        xpTable = constants.leveling_xp;
    }

    const maxLevel = Math.max(...Object.keys(xpTable));

    if (isNaN(xp)) {
      return {
        xp: 0,
        level: 0,
        maxLevel: maxLevel,
        xpCurrent: 0,
        xpForNext: xpTable[1],
        progress: 0
      };
    }

    let xpTotal = 0;
    let level = 0;
    let xpForNext = 0;

    for (let x = 1; x <= maxLevel; x++) {
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

    const progress = Math.floor((Math.max(0, Math.min(xpCurrent / xpForNext, 1))) * 100);

    return {
      xp,
      level,
      maxLevel,
      xpCurrent,
      xpForNext,
      progress
    };
  },

  getSlayerLevel (slayer) {
    if (!slayer) {
      return {
        xp: 0,
        tier1: 0,
        tier2: 0,
        tier3: 0,
        tier4: 0,
        level: 0
      };
    }

    const { claimed_levels } = slayer;

    let level = 0;

    for (const level_name in claimed_levels) {
      const _level = parseInt(level_name.split('_').pop());

      if (_level > level) { level = _level; }
    }

    return {
      xp: slayer.xp || 0,
      tier1: slayer.boss_kills_tier_0 || 0,
      tier2: slayer.boss_kills_tier_1 || 0,
      tier3: slayer.boss_kills_tier_2 || 0,
      tier4: slayer.boss_kills_tier_3 || 0,
      level: level
    };
  },

  getSlayerLevelByXp (xp) {
    const { slayer_xp } = constants;
    const maxLevel = Math.max(...Object.keys(slayer_xp));

    let level = 0;

    for (let x = 1; x <= maxLevel && slayer_xp[x] <= xp; x++) {
      level = x;
    }

    return level;
  },

  getBonusStat (level, skill, max, incremention) {
    const skill_stats = constants.bonus_stats[skill];
    const steps = Object.keys(skill_stats).sort((a, b) => Number(a) - Number(b)).map(a => Number(a));

    const bonus = Object.assign({}, constants.stat_template);

    for (let x = steps[0]; x <= max; x += incremention) {
      if (level < x) { break; }

      const skill_step = steps.slice().reverse().find(a => a <= x);

      const skill_bonus = skill_stats[skill_step];

      for (const skill in skill_bonus) { bonus[skill] += skill_bonus[skill]; }
    }

    return bonus;
  },
  getEffectiveHealth (health, defense) {
    if (defense <= 0) return health;

    return Math.round(health * (1 + defense / 100));
  }
};
