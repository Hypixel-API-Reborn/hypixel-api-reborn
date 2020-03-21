const constants = require('./Constants')
const nbt = require('prismarine-nbt')
const parseNbt = (require('util')).promisify(nbt.parse)
module.exports = {
    async decode(base64) {
        let buffer = Buffer.from(base64, 'base64');
        let data = await parseNbt(buffer)
        data = nbt.simplify(data);
        let newdata = [];
        for (let i = 0; i < data.i.length; i++) {
            newdata.push(data.i[i])
        }
        return newdata;
    },
    getLevelByXp(xp, runecrafting) {
        let xp_table = runecrafting ? constants.runecrafting_xp : constants.leveling_xp;

        if (isNaN(xp)) {
            return {
                xp: 0,
                level: 0,
                xpCurrent: 0,
                xpForNext: xp_table[1],
                progress: 0
            };
        }

        let xpTotal = 0;
        let level = 0;

        let xpForNext = 0;

        let maxLevel = Object.keys(xp_table).sort((a, b) => Number(a) - Number(b)).map(a => Number(a)).pop();

        for (let x = 1; x <= maxLevel; x++) {
            xpTotal += xp_table[x];

            if (xpTotal > xp) {
                xpTotal -= xp_table[x];
                break;
            } else {
                level = x;
            }
        }

        let xpCurrent = Math.floor(xp - xpTotal);

        if (level < maxLevel)
            xpForNext = Math.ceil(xp_table[level + 1]);

        let progress = Math.round((Math.max(0, Math.min(xpCurrent / xpForNext, 1))) * 100);

        return {
            xp,
            level,
            maxLevel,
            xpCurrent,
            xpForNext,
            progress
        };
    },
    getSlayerLevel(slayer) {
        let { claimed_levels } = slayer;

        let level = 0;

        for (let level_name in claimed_levels) {
            let _level = parseInt(level_name.split("_").pop());

            if (_level > level)
                level = _level;
        }

        return level;
    },
    getBonusStat(level, skill, max, incremention) {
        let skill_stats = constants.bonus_stats[skill];
        let steps = Object.keys(skill_stats).sort((a, b) => Number(a) - Number(b)).map(a => Number(a));

        let bonus = Object.assign({}, constants.stat_template);

        for (let x = steps[0]; x <= max; x += incremention) {
            if (level < x)
                break;

            let skill_step = steps.slice().reverse().find(a => a <= x);

            let skill_bonus = skill_stats[skill_step];

            for (let skill in skill_bonus)
                bonus[skill] += skill_bonus[skill];
        }

        return bonus;
    },
    getEffectiveHealth(health, defense) {
        if (defense <= 0) return health;

        return Math.round(health * (1 + defense / 100));
    }
}