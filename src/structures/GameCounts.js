const { MiniGamesString } = require('../utils/Constants');
const { removeSnakeCaseString, recursive } = require('../utils/removeSnakeCase');
/**
 * GameCounts class
 */
class GameCounts {
  /**
   * @param {object} data
   */
  constructor (data) {
    /**
     * Player count in Main lobby
     * @name GameCounts#mainLobby
     * @type {object}
     */
    /**
     * Player count in Tournament lobby
     * @name GameCounts#tournamentLobby
     * @type {object}
     */
    /**
     * Player count in SkyWars
     * @name GameCounts#skywars
     * @type {object}
     */
    /**
     * Player count in The Prototype
     * @name GameCounts#prototype
     * @type {object}
     */
    /**
     * Player count in BedWars
     * @name GameCounts#bedwars
     * @type {object}
     */
    /**
     * Player count in The Classic Games
     * @name GameCounts#classicGames
     * @type {object}
     */
    /**
     * Player count in Housing
     * @name GameCounts#housing
     * @type {object}
     */
    /**
     * Player count in Blitz Survival Games
     * @name GameCounts#blitzSurvivalGames
     * @type {object}
     */
    /**
     * Player count in UHC Champions
     * @name GameCounts#uhcChampions
     * @type {object}
     */
    /**
     * Player count in The Pit
     * @name GameCounts#thePit
     * @type {object}
     */
    /**
     * Player count in SkyBlock
     * @name GameCounts#skyblock
     * @type {object}
     */
    /**
     * Player count in Warlords
     * @name GameCounts#warlords
     * @type {object}
     */
    /**
     * Player count in Smash Heroes
     * @name GameCounts#smashHeroes
     * @type {object}
     */
    /**
     * Player count in Cops And Crims
     * @name GameCounts#copsAndCrims
     * @type {object}
     */
    /**
     * Player count in Speed UHC
     * @name GameCounts#speedUhc
     * @type {object}
     */
    /**
     * Player count in Arcade
     * @name GameCounts#arcade
     * @type {object}
     */
    /**
     * Player count in The TNT Games
     * @name GameCounts#theTntGames
     * @type {object}
     */
    /**
     * Player count in Duels
     * @name GameCounts#duels
     * @type {object}
     */
    /**
     * Player count in Murder Mystery
     * @name GameCounts#murderMystery
     * @type {object}
     */
    /**
     * Player count in Mega Walls
     * @name GameCounts#megaWalls
     * @type {object}
     */
    /**
     * Player count in SMP
     * @name GameCounts#smp
     * @type {object}
     */
    /**
     * Player count in Replay
     * @name GameCounts#replay
     * @type {object}
     */
    /**
     * Player count in Limbo
     * @name GameCounts#limbo
     * @type {object}
     */
    /**
     * Player count in Idle
     * @name GameCounts#idle
     * @type {object}
     */
    /**
     * Player count in Queue
     * @name GameCounts#queue
     * @type {object}
     */
    /**
     * Current player count
     * @type {number}
     */
    this.playerCount = data.playerCount;
    for (const game in data.games) {
      if (Object.prototype.hasOwnProperty.call(MiniGamesString, game)) {
        const objectName = MiniGamesString[game].toUpperCase().replace(/ +/g, '_');
        this[removeSnakeCaseString(objectName)] = recursive(data.games[game], true);
      } else {
        this[removeSnakeCaseString(game)] = recursive(data.games[game], true);
      }
    }
  }
}
module.exports = GameCounts;
