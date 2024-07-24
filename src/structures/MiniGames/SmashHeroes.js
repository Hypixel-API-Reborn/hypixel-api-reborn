const divide = require('../../utils/divide');

class SmashHeroesMode {
  /**
   * @param {object} data SmashHeroes data
   * @param {string} mode SmashHeores mode
   */
  constructor(data, mode) {
    /**
     * kills
     * @type {number}
     */
    this.kills = data[`kills_${mode}`] || 0;
    /**
     * deaths
     * @type {number}
     */
    this.deaths = data[`deaths_${mode}`] || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * wins
     * @type {number}
     */
    this.wins = data[`wins_${mode}`] || 0;
    /**
     * losses
     * @type {number}
     */
    this.losses = data[`losses_${mode}`] || 0;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
  }
}

class SmashHeoresHero {
  /**
   * @param {object} data SmashHeroes data
   * @param {string} hero Hero name
   */
  constructor(data, hero) {
    /**
     * Hero Name
     * @type {string}
     */
    this.name = hero;
    /**
     * Level
     * @type {number}
     */
    this.level = data[`lastLevel_${hero}`] || 0;
    /**
     * Xp
     * @type {number}
     */
    this.xp = data[`xp_${hero}`] || 0;
    /**
     * Prestige
     * @type {number}
     */
    this.prestige = data[`pg_${hero}`] || 0;
    /**
     * Played Games
     * @type {number}
     */
    this.playedGames = data.class_stats?.[hero]?.games || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.class_stats?.[hero]?.kills || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.class_stats?.[hero]?.deaths || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.class_stats?.[hero]?.wins || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data.class_stats?.[hero]?.losses || 0;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
  }
}

/**
 * SmashHeroes class
 */
class SmashHeroes {
  /**
   * @param {object} data SmashHeroes data
   */
  constructor(data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Level
     * @type {number}
     */
    this.level = data.smash_level_total || 0;
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.win_streak || 0;
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data.games || 0;
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
     * Kill/Death ratio
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
     * Win/Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Smashed
     * @type {number}
     */
    this.smashed = data.smashed || 0;
    /**
     * Stats for each mode
     * @type {SmashHeroesMode}
     */
    this['1v1v1v1'] = new SmashHeroesMode(data, 'normal');
    /**
     * Stats for each mode
     * @type {SmashHeroesMode}
     */
    this['2v2'] = new SmashHeroesMode(data, '2v2');
    /**
     * Stats for each mode
     * @type {SmashHeroesMode}
     */
    this['2v2v2'] = new SmashHeroesMode(data, 'teams');
    /**
     * Active class
     * @type {string}
     */
    this.activeClass = data.active_class || null;
    /**
     * The Bulk
     * @type {SmashHeoresHero}
     */
    this.theBulk = new SmashHeoresHero(data, 'THE_BULK');
    /**
     * Cake Monster
     * @type {SmashHeoresHero}
     */
    this.cakeMonster = new SmashHeoresHero(data, 'CAKE_MONSTER');
    /**
     * General Cluck
     * @type {SmashHeoresHero}
     */
    this.generalCluck = new SmashHeoresHero(data, 'GENERAL_CLUCK');
    /**
     * Botmun
     * @type {SmashHeoresHero}
     */
    this.botmun = new SmashHeoresHero(data, 'BOTMUN');
    /**
     * Marauder
     * @type {SmashHeoresHero}
     */
    this.marauder = new SmashHeoresHero(data, 'MARAUDER');
    /**
     * Pug
     * @type {SmashHeoresHero}
     */
    this.pug = new SmashHeoresHero(data, 'PUG');
    /**
     * Tinman
     * @type {SmashHeoresHero}
     */
    this.tinman = new SmashHeoresHero(data, 'TINMAN');
    /**
     * Spoderman
     * @type {SmashHeoresHero}
     */
    this.spoderman = new SmashHeoresHero(data, 'SPODERMAN');
    /**
     * Frosty
     * @type {SmashHeoresHero}
     */
    this.frosty = new SmashHeoresHero(data, 'FROSTY');
    /**
     * Sergeant Shield
     * @type {SmashHeoresHero}
     */
    this.sergeantShield = new SmashHeoresHero(data, 'SERGEANT_SHIELD');
    /**
     * Skullfire
     * @type {SmashHeoresHero}
     */
    this.skullfire = new SmashHeoresHero(data, 'SKULLFIRE');
    /**
     * Goku
     * @type {SmashHeoresHero}
     */
    this.goku = new SmashHeoresHero(data, 'GOKU');
    /**
     * Sanic
     * @type {SmashHeoresHero}
     */
    this.sanic = new SmashHeoresHero(data, 'SANIC');
    /**
     * Dusk Crawler
     * @type {SmashHeoresHero}
     */
    this.duskCrawler = new SmashHeoresHero(data, 'DUSK_CRAWLER');
    /**
     * Shoop Da Whoop
     * @type {SmashHeoresHero}
     */
    this.shoopDaWhoop = new SmashHeoresHero(data, 'SHOOP_DA_WHOOP');
    /**
     * Green Hood
     * @type {SmashHeoresHero}
     */
    this.greenHood = new SmashHeoresHero(data, 'GREEN_HOOD');
  }
}

module.exports = SmashHeroes;
