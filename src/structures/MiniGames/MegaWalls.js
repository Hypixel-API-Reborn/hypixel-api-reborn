const divide = require('../../utils/divide');

class MegaWallsModeStats {
  /**
   * @param {object} data MegaWalls data
   * @param {string} mode MegaWalls Mode
   * @param {string} kit MegaWalls Kit
   */
  constructor(data, mode, kit) {
    if (kit) kit = `${kit}_`;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`${kit}kills_${mode}`] || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data[`${kit}assists_${mode}`] || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`${kit}deaths_${mode}`] || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`${kit}wins_${mode}`] || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data[`${kit}losses_${mode}`] || 0;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Final kills
     * @type {number}
     */
    this.finalKills = data[`${kit}final_kills_${mode}`] || 0;
    /**
     * Final assists
     * @type {number}
     */
    this.finalAssists = data[`${kit}final_assists_${mode}`] || 0;
    /**
     * Final deaths
     * @type {number}
     */
    this.finalDeaths = data[`${kit}final_deaths_${mode}`] || 0;
    /**
     * Final Kill Death ratio
     * @type {number}
     */
    this.finalKDRatio = divide(this.finalKills, this.finalDeaths);
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data[`${kit}games_played_${mode}`] || 0;
    /**
     * Wither damage
     * @type {number}
     */
    this.witherDamage = data[`${kit}wither_damage_${mode}`] || 0;
    /**
     * Defender kills
     * @type {number}
     */
    this.defenderKills = data[`${kit}defender_kills_${mode}`] || 0;
    /**
     * Walked
     * @type {number}
     */
    this.walked = data[`${kit}meters_walked_${mode}`] || 0;
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced = data[`${kit}blocks_placed_${mode}`] || 0;
    /**
     * Blocks Broken
     * @type {number}
     */
    this.blocksBroken = data[`${kit}blocks_broken_${mode}`] || 0;
    /**
     * Melee Kills
     * @type {number}
     */
    this.meleeKills = data[`${kit}kills_melee_${mode}`] || 0;
    /**
     * Damage Delt
     * @type {number}
     */
    this.damageDealt = data[`${kit}damage_dealt_${mode}`] || 0;
  }
}
class MegaWallsKitStats {
  /**
   * @param {object} data MegaWalls data
   * @param {string} kit MegaWalls Kit
   */
  constructor(data, kit) {
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`${kit}_kills`] || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data[`${kit}_assists`] || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`${kit}_deaths`] || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`${kit}_wins`] || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data[`${kit}_losses`] || 0;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Final kills
     * @type {number}
     */
    this.finalKills = data[`${kit}_final_kills`] || 0;
    /**
     * Final assists
     * @type {number}
     */
    this.finalAssists = data[`${kit}_final_assists`] || 0;
    /**
     * Final deaths
     * @type {number}
     */
    this.finalDeaths = data[`${kit}_final_deaths`] || 0;
    /**
     * Final Kill Death ratio
     * @type {number}
     */
    this.finalKDRatio = divide(this.finalKills, this.finalDeaths);
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data[`${kit}_games_played`] || 0;
    /**
     * Wither damage
     * @type {number}
     */
    this.witherDamage = data[`${kit}_wither_damage`] || 0;
    /**
     * Defender kills
     * @type {number}
     */
    this.defenderKills = data[`${kit}_defender_kills`] || 0;
    /**
     * Walked
     * @type {number}
     */
    this.walked = data[`${kit}_meters_walked`] || 0;
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced = data[`${kit}_blocks_placed`] || 0;
    /**
     * Blocks Broken
     * @type {number}
     */
    this.blocksBroken = data[`${kit}_blocks_broken`] || 0;
    /**
     * Melee Kills
     * @type {number}
     */
    this.meleeKills = data[`${kit}_kills_melee`] || 0;
    /**
     * Damage Delt
     * @type {number}
     */
    this.damageDealt = data[`${kit}_damage_dealt`] || 0;
    /**
     * Stats for each mode
     * @type {MegaWallsModeStats}
     */
    this.faceOff = new MegaWallsModeStats(data, 'face_off', kit);
    /**
     * Stats for each mode
     * @type {MegaWallsModeStats}
     */
    this.casualBrawl = new MegaWallsModeStats(data, 'gvg', kit);
  }
}

/**
 * MegaWalls class
 */
class MegaWalls {
  /**
   * @param {object} data MegaWalls data
   */
  constructor(data) {
    /**
     * Selected class
     * @type {string|null}
     */
    this.selectedClass = data.chosen_class || null;
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
     * Assists
     * @type {number}
     */
    this.assists = data.assists || 0;
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
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data.losses || 0;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Final kills
     * @type {number}
     */
    this.finalKills = (data.final_kills || 0) + (data.finalkills || 0);
    /**
     * Final assists
     * @type {number}
     */
    this.finalAssists = (data.final_assists || 0) + (data.finalassists || 0);
    /**
     * Final deaths
     * @type {number}
     */
    this.finalDeaths = (data.final_deaths || 0) + (data.finalDeaths || 0);
    /**
     * Final Kill Death ratio
     * @type {number}
     */
    this.finalKDRatio = divide(this.finalKills, this.finalDeaths);
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data.games_played || 0;
    /**
     * Wither damage
     * @type {number}
     */
    this.witherDamage = (data.wither_damage || 0) + (data.witherDamager || 0);
    /**
     * Defender kills
     * @type {number}
     */
    this.defenderKills = data.defender_kills || 0;
    /**
     * Walked
     * @type {number}
     */
    this.walked = data.meters_walked || 0;
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced = data.blocks_placed || 0;
    /**
     * Blocks Broken
     * @type {number}
     */
    this.blocksBroken = data.blocks_broken || 0;
    /**
     * Melee Kills
     * @type {number}
     */
    this.meleeKills = data.kills_melee || 0;
    /**
     * Damage Delt
     * @type {number}
     */
    this.damageDealt = data.damage_dealt || 0;
    /**
     * Stats for each mode
     * @type {MegaWallsModeStats}
     */
    this.faceOff = new MegaWallsModeStats(data, 'face_off');
    /**
     * Stats for each mode
     * @type {MegaWallsModeStats}
     */
    this.casualBrawl = new MegaWallsModeStats(data, 'gvg');
    /**
     * cow kit stats
     * @type {MegaWallsKitStats}
     */
    this.cow = new MegaWallsKitStats(data, 'cow');
    /**
     * hunter kit stats
     * @type {MegaWallsKitStats}
     */
    this.hunter = new MegaWallsKitStats(data, 'hunter');
    /**
     * shark kit stats
     * @type {MegaWallsKitStats}
     */
    this.shark = new MegaWallsKitStats(data, 'shark');
    /**
     * arcanist kit stats
     * @type {MegaWallsKitStats}
     */
    this.arcanist = new MegaWallsKitStats(data, 'arcanist');
    /**
     * deadlord kit stats
     * @type {MegaWallsKitStats}
     */
    this.deadlord = new MegaWallsKitStats(data, 'deadlord');
    /**
     * golem kit stats
     * @type {MegaWallsKitStats}
     */
    this.golem = new MegaWallsKitStats(data, 'golem');
    /**
     * herobrine kit stats
     * @type {MegaWallsKitStats}
     */
    this.herobrine = new MegaWallsKitStats(data, 'herobrine');
    /**
     * pigman kit stats
     * @type {MegaWallsKitStats}
     */
    this.pigman = new MegaWallsKitStats(data, 'pigman');
    /**
     * zombie kit stats
     * @type {MegaWallsKitStats}
     */
    this.zombie = new MegaWallsKitStats(data, 'zombie');
    /**
     * blaze kit stats
     * @type {MegaWallsKitStats}
     */
    this.blaze = new MegaWallsKitStats(data, 'blaze');
    /**
     * enderman kit stats
     * @type {MegaWallsKitStats}
     */
    this.enderman = new MegaWallsKitStats(data, 'enderman');
    /**
     * shaman kit stats
     * @type {MegaWallsKitStats}
     */
    this.shaman = new MegaWallsKitStats(data, 'shaman');
    /**
     * squid kit stats
     * @type {MegaWallsKitStats}
     */
    this.squid = new MegaWallsKitStats(data, 'squid');
    /**
     * creeper kit stats
     * @type {MegaWallsKitStats}
     */
    this.creeper = new MegaWallsKitStats(data, 'creeper');
    /**
     * pirate kit stats
     * @type {MegaWallsKitStats}
     */
    this.pirate = new MegaWallsKitStats(data, 'pirate');
    /**
     * sheep kit stats
     * @type {MegaWallsKitStats}
     */
    this.sheep = new MegaWallsKitStats(data, 'sheep');
    /**
     * skeleton kit stats
     * @type {MegaWallsKitStats}
     */
    this.skeleton = new MegaWallsKitStats(data, 'skeleton');
    /**
     * spider kit stats
     * @type {MegaWallsKitStats}
     */
    this.spider = new MegaWallsKitStats(data, 'spider');
    /**
     * werewolf kit stats
     * @type {MegaWallsKitStats}
     */
    this.werewolf = new MegaWallsKitStats(data, 'werewolf');
    /**
     * angel kit stats
     * @type {MegaWallsKitStats}
     */
    this.angel = new MegaWallsKitStats(data, 'angel');
    /**
     * assassin kit stats
     * @type {MegaWallsKitStats}
     */
    this.assassin = new MegaWallsKitStats(data, 'assassin');
    /**
     * automaton kit stats
     * @type {MegaWallsKitStats}
     */
    this.automaton = new MegaWallsKitStats(data, 'automaton');
    /**
     * moleman kit stats
     * @type {MegaWallsKitStats}
     */
    this.moleman = new MegaWallsKitStats(data, 'moleman');
    /**
     * phoenix kit stats
     * @type {MegaWallsKitStats}
     */
    this.phoenix = new MegaWallsKitStats(data, 'phoenix');
    /**
     * renegade kit stats
     * @type {MegaWallsKitStats}
     */
    this.renegade = new MegaWallsKitStats(data, 'renegade');
    /**
     * snowman kit stats
     * @type {MegaWallsKitStats}
     */
    this.snowman = new MegaWallsKitStats(data, 'snowman');
  }
}

module.exports = MegaWalls;
