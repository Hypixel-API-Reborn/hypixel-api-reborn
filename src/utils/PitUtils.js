// Credit https://github.com/PitPanda/PitPandaProduction/blob/b1971f56ea1aa8c829b722cbb33247c96591c0cb/structures/Pit.js
const tables = require('./Constants');
module.exports = {
  calcLevel(prestige, xp) {
    const multiplier = tables.pit.Prestiges[prestige].Multiplier;
    let level = 0;
    let extra = 0;
    let next = 0;
    while (xp > 0 && level < 120) {
      const levelXp = tables.pit.Levels[Math.floor(level / 10)].Xp * multiplier;
      if (xp >= levelXp * 10) {
        xp -= levelXp * 10;
        level += 10;
        if (xp == 0) {
          if (!level == 120) extra = tables.pit.Levels[Math.floor(level / 10)].Xp * multiplier;
        }
      } else {
        const gain = Math.floor(xp / levelXp);
        level += gain;
        xp -= gain * levelXp;
        next = levelXp - xp;
        extra = xp;
        xp = 0;
      }
    }
    return { level, extra, next };
  }
};
