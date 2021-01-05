const divide = require('../../utils/divide');
const kits = [
  'arachnologist', 'archer', 'armorer',
  'astronaut', 'baker', 'blaze',
  'creepertamer', 'fisherman', 'horsetamer',
  'hunter', 'knight', 'meatmaster',
  'necromancer', 'pigman', 'reddragon',
  'rogue', 'scout', 'slimeyslime',
  'speleologist', 'tim', 'toxicologist',
  'troll', 'wolftamer', 'paladin',
  'shadow knight', 'hype train', 'jockey',
  'reaper', 'golem', 'farmer',
  'florist', 'snowman', 'guardian',
  'warlock', 'viking', 'diver',
  'ranger', 'donkeytamer', 'phoenix',
  'warrior', 'rambo'
];
/**
 * Blitz SG class
 * @param {object} data Blitz SG data
 */
class BlitzSurvivalGames {
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Solo wins
     * @type {number}
     */
    this.winsSolo = data.wins || 0;
    /**
     * Team wins
     * @type {number}
     */
    this.winsTeam = data.wins_teams || 0;
    /**
     * Stats for each kit
     * @type {BlitzSGKitStats[]}
     */
    this.kitStats = generateKitStats(data);
  };
}
function generateKitStats (data) {
  const stats = [];
  for (let i = 0; i < kits.length; i++) {
    if (data[kits[i]]) {
      stats.push({
        name: kits[i],
        games: data[`games_played_${kits[i]}`] || 0,
        level: (data[kits[i]] + 1) || 1,
        experience: data[`exp_${kits[i]}`] || 0,
        prestige: data[`p${kits[i]}`] || 0,
        kills: data[`kills_${kits[i]}`] || 0,
        deaths: data[`deaths_${kits[i]}`] || 0,
        KDRatio: divide(data[`kills_${kits[i]}`], data[`deaths_${kits[i]}`]),
        wins: data[`wins_${kits[i]}`] || 0,
        losses: data[`losses_${kits[i]}`] || 0,
        WLRatio: divide(data[`wins_${kits[i]}`], data[`losses_${kits[i]}`]),
        timePlayed: data[`time_played_${kits[i]}`] || null
      });
    }
  }
  return stats;
}
/**
 * @typedef {string} BlitzSGKit
 * * `arachnologist`
 * * `archer`
 * * `armorer`
 * * `astronaut`
 * * `baker`
 * * `blaze`
 * * `creepertamer`
 * * `fisherman`
 * * `horsetamer`
 * * `hunter`
 * * `knight`
 * * `meatmaster`
 * * `necromancer`
 * * `pigman`
 * * `reddragon`
 * * `rogue`
 * * `scout`
 * * `slimeyslime`
 * * `speleologist`
 * * `tim`
 * * `toxicologist`
 * * `troll`
 * * `wolftamer`
 * * `paladin`
 * * `shadow knight`
 * * `hype train`
 * * `jockey`
 * * `reaper`
 * * `golem`
 * * `farmer`
 * * `florist`
 * * `snowman`
 * * `guardian`
 * * `warlock`
 * * `viking`
 * * `diver`
 * * `ranger`
 * * `donkeytamer`
 * * `phoenix`
 * * `warrior`
 * * `rambo`
*/
/**
 * @typedef {object} BlitzSGKitStats
 * @property {BlitzSGKit} name Kit name
 * @property {number} games Played games
 * @property {number} level level
 * @property {number} experience Total experience
 * @property {number} prestige Prestige
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill Death ratio
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} WLRatio Win Loss ratio
 * @property {number|null} timePlayed Time played
*/
module.exports = BlitzSurvivalGames;
