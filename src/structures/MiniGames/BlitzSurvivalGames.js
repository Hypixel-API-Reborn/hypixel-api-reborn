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
class BlitzSurvivalGames {
  constructor (data) {
    this.coins = data.coins || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.winsSolo = data.wins || 0;
    this.winsTeam = data.wins_teams || 0;
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
module.exports = BlitzSurvivalGames;
