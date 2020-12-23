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
  'warrior', 'rambo', 'random'
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
     * @type {number}
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
 * @typedef {object} BlitzSGKits
 * @property {BlitzSGKitStats} arachnologist
 * @property {BlitzSGKitStats} archer
 * @property {BlitzSGKitStats} armorer
 * @property {BlitzSGKitStats} astronaut
 * @property {BlitzSGKitStats} baker
 * @property {BlitzSGKitStats} blaze
 * @property {BlitzSGKitStats} creepertamer
 * @property {BlitzSGKitStats} fisherman
 * @property {BlitzSGKitStats} horsetamer
 * @property {BlitzSGKitStats} hunter
 * @property {BlitzSGKitStats} knight
 * @property {BlitzSGKitStats} meatmaster
 * @property {BlitzSGKitStats} necromancer
 * @property {BlitzSGKitStats} pigman
 * @property {BlitzSGKitStats} reddragon
 * @property {BlitzSGKitStats} rogue
 * @property {BlitzSGKitStats} scout
 * @property {BlitzSGKitStats} slimeyslime
 * @property {BlitzSGKitStats} speleologist
 * @property {BlitzSGKitStats} tim
 * @property {BlitzSGKitStats} toxicologist
 * @property {BlitzSGKitStats} troll
 * @property {BlitzSGKitStats} wolftamer
 * @property {BlitzSGKitStats} paladin
 * @property {BlitzSGKitStats} shadow knight
 * @property {BlitzSGKitStats} hype train
 * @property {BlitzSGKitStats} jockey
 * @property {BlitzSGKitStats} reaper
 * @property {BlitzSGKitStats} golem
 * @property {BlitzSGKitStats} farmer
 * @property {BlitzSGKitStats} florist
 * @property {BlitzSGKitStats} snowman
 * @property {BlitzSGKitStats} guardian
 * @property {BlitzSGKitStats} warlock
 * @property {BlitzSGKitStats} viking
 * @property {BlitzSGKitStats} diver
 * @property {BlitzSGKitStats} ranger
 * @property {BlitzSGKitStats} donkeytamer
 * @property {BlitzSGKitStats} phoenix
 * @property {BlitzSGKitStats} warrior
 * @property {BlitzSGKitStats} rambo
 * @property {BlitzSGKitStats} random
*/
module.exports = BlitzSurvivalGames;
