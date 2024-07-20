const divide = require('../../utils/divide');
/**
 * Cops and crims Defusal class
 */
class CopsAndCrimsDefusal {
  /**
   * @param {object} data Cops and crims data
   
   */
  constructor(data) {
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Headshot kills
     * @type {number}
     */
    this.headshotKills = data.headshot_kills || 0;
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
    this.wins = data.game_wins || 0;
    /**
     * Games played
     * @type {number}
     */
    this.gamesPlayed = data.game_plays || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.gamesPlayed - this.wins;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Round wins
     * @type {number}
     */
    this.roundWins = data.round_wins || 0;
    /**
     * Shows fired
     * @type {number}
     */
    this.shotsFired = data.shots_fired || 0;
    /**
     * Bombs defused
     * @type {number}
     */
    this.bombsDefused = data.bombs_defused || 0;
    /**
     * Bombs planted
     * @type {number}
     */
    this.bombsPlanted = data.bombs_planted || 0;
    /**
     * Kills as Crim
     * @type {number}
     */
    this.killsAsCrim = data.criminal_kills || 0;
    /**
     * Kills as Cop
     * @type {number}
     */
    this.killsAsCop = data.cop_kills || 0;
  }
}
/**
 * Cops and crims Deathmatch class
 */
class CopsAndCrimsDeathmatch {
  /**
   * @param {object} data Cops and crims data
   
   */
  constructor(data) {
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_deathmatch || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data.assists_deathmatch || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths_deathmatch || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.game_wins_deathmatch || 0;
    /**
     * Games played
     * @type {number}
     */
    this.gamesPlayed = data.game_plays_deathmatch || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.gamesPlayed - this.wins;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Kills as Crim
     * @type {number}
     */
    this.killsAsCrim = data.criminal_kills_deathmatch || 0;
    /**
     * Kills as Cop
     * @type {number}
     */
    this.killsAsCop = data.cop_kills_deathmatch || 0;
  }
}
/**
 * Cops and crims Gun Game class
 */
class CopsAndCrimsGunGame {
  /**
   * @param {object} data Cops and crims data
   
   */
  constructor(data) {
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_gungame || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data.assists_gungame || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths_gungame || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.game_wins_gungame || 0;
    /**
     * Games played
     * @type {number}
     */
    this.gamesPlayed = data.game_plays_gungame || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.gamesPlayed - this.wins;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Kills as Crim
     * @type {number}
     */
    this.killsAsCrim = data.criminal_kills_gungame || 0;
    /**
     * Kills as Cop
     * @type {number}
     */
    this.killsAsCop = data.cop_kills_gungame || 0;
    /**
     * Fastest Win
     * ! WARNING This number is most likely wrong as it can be negative
     * @type {number}
     */
    this.fastestWin = data.fastest_win_gungame || 0;
  }
}
/**
 * Cops and crims class
 */
class CopsAndCrims {
  /**
   * @param {object} data Cops and crims data
   
   */
  constructor(data) {
    /**
     * Defusal stats
     * @type {CopsAndCrimsDefusal}
     */
    this.defusal = new CopsAndCrimsDefusal(data);
    /**
     * Deathmatch stats
     * @type {CopsAndCrimsDeathmatch}
     */
    this.deathmath = new CopsAndCrimsDeathmatch(data);
    /**
     * Gun Game stats
     * @type {CopsAndCrimsGunGame}
     */
    this.gunGame = new CopsAndCrimsGunGame(data);
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = this.defusal.kills + this.deathmath.kills + this.gunGame.kills;
    /**
     * Assists
     * @type {number}
     */
    this.assists = this.defusal.assists + this.deathmath.assists + this.gunGame.assists;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = this.defusal.deaths + this.deathmath.deaths + this.gunGame.deaths;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = this.defusal.wins + this.deathmath.wins + this.gunGame.wins;
    /**
     * Games played
     * @type {number}
     */
    this.gamesPlayed = this.defusal.gamesPlayed + this.deathmath.gamesPlayed + this.gunGame.gamesPlayed;
    /**
     * Losses
     * @type {number}
     */
    this.losses = this.gamesPlayed - this.wins;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Kills as Crim
     * @type {number}
     */
    this.killsAsCrim = this.defusal.killsAsCrim + this.deathmath.killsAsCrim + this.gunGame.killsAsCrim;
    /**
     * Kills as Cop
     * @type {number}
     */
    this.killsAsCop = this.defusal.killsAsCop + this.deathmath.killsAsCop + this.gunGame.killsAsCop;
    /**
     * Prefix Color
     * @type {string}
     */
    this.prefixColor = data.lobbyPrefixColor || '';
    /**
     * Show Prefix
     * @type {boolean}
     */
    this.showPrefix = data.show_lobby_prefix || false;
    /**
     * Selected Prefix
     * @type {string}
     */
    this.selectedPrefix = data.selected_lobby_prefix || '';
    /**
     * Kills In Prefix
     * @type {boolean}
     */
    this.killsInPrefix = data.show_kills_in_prefix || false;
  }
}

module.exports = CopsAndCrims;
