const games = [
  { name: 'Quake Craft', code: 'QUAKECRAFT', id: 2 },
  { name: 'Walls', code: 'WALLS', id: 3 },
  { name: 'Paintball', code: 'PAINTBALL', id: 4 },
  { name: 'Blitz Survival Games', code: 'SURVIVAL_GAMES', id: 5 },
  { name: 'The TNT Games', code: 'TNTGAMES', id: 6 },
  { name: 'VampireZ', code: 'VAMPIREZ', id: 7 },
  { name: 'Mega Walls', code: 'WALLS3', id: 13 },
  { name: 'Arcade', code: 'ARCADE', id: 14 },
  { name: 'Arena Brawl', code: 'ARENA', id: 17 },
  { name: 'UHC Champions', code: 'UHC', id: 20 },
  { name: 'Cops and Crims', code: 'MCGO', id: 21 },
  { name: 'Warlords', code: 'BATTLEGROUND', id: 23 },
  { name: 'Smash Heroes', code: 'SUPER_SMASH', id: 24 },
  { name: 'Turbo Kart Racers', code: 'GINGERBREAD', id: 25 },
  { name: 'Housing', code: 'HOUSING', id: 26 },
  { name: 'SkyWars', code: 'SKYWARS', id: 51 },
  { name: 'Crazy Walls', code: 'TRUE_COMBAT', id: 52 },
  { name: 'Speed UHC', code: 'SPEED_UHC', id: 54 },
  { name: 'SkyClash', code: 'SKYCLASH', id: 55 },
  { name: 'Classic Games', code: 'LEGACY', id: 56 },
  { name: 'Prototype', code: 'PROTOTYPE', id: 57 },
  { name: 'BedWars', code: 'BEDWARS', id: 58 },
  { name: 'Murder Mystery', code: 'MURDER_MYSTERY', id: 59 },
  { name: 'Build Battle', code: 'BUILD_BATTLE', id: 60 },
  { name: 'Duels', code: 'DUELS', id: 61 },
  { name: 'SkyBlock', code: 'SKYBLOCK', id: 63 },
  { name: 'The Pit', code: 'PIT', id: 64 }
];
/**
 * Game class
 * @param {GameId|GameCode} game Game ID or Game Code
 */
class Game {
  constructor (game) {
    this.game = game;
  }

  /**
   * Returns regular game name
   * @returns {GameString}
   */
  toString () {
    if (isNaN(this.game)) {
      return games.find(g => g.code === this.game) ? games.find(g => g.code === this.game).name : 'Not found';
    } else {
      return games.find(g => g.id === this.game) ? games.find(g => g.id === this.game).name : 'Not found';
    }
  }

  /**
   * Returns game ID
   * @type {GameId}
   */
  get id () {
    if (isNaN(this.game)) {
      return games.find(g => g.code === this.game) ? games.find(g => g.code === this.game).id : 'Not found';
    }
    return this.game;
  }

  /**
   * Returns game code
   * @type {GameCode}
   */
  get code () {
    if (!isNaN(this.game)) {
      return games.find(g => g.id === this.game) ? games.find(g => g.id === this.game).id : 'Not found';
    }
    return this.game;
  }
}
/**
 * @typedef {string} GameString
 * * QUAKECRAFT: `Quake Craft`
 * * WALLS: `Walls`
 * * PAINTBALL: `Paintball`
 * * SURVIVAL_GAMES: `Blitz Survival Games`
 * * TNTGAMES: `The TNT Games`
 * * VAMPIREZ: `VAMPIREZ`
 * * WALLS3: `Mega Walls`
 * * ARCADE: `Arcade`
 * * ARENA: `Arena Brawl`
 * * UHC: `UHC Champions`
 * * MCGO: `Cops And Crims`
 * * WARLORDS: `Warlords`
 * * SUPER_SMASH: `Smash Heroes`
 * * GINGERBREAD: `Turbo Kart Racers`
 * * HOUSING: `Housing`
 * * SKYWARS: `SkyWars`
 * * TRUE_COMBAT: `Crazy Walls`
 * * SPEED_UHC: `Speed UHC`
 * * SKYCLASH: `SkyClash`
 * * LEGACY: `Classic Games`
 * * PROTOTYPE: `Prototype`
 * * BEDWARS: `BedWars`
 * * MURDER_MYSTERY: `Murder Mystery`
 * * BUILD_BATTLE: `Build Battle`
 * * DUELS: `Duels`
 * * SKYBLOCK: `SkyBlock`
 * * PIT: `The Pit`
 */
/**
 * @typedef {string} GameCode
 * * QUAKECRAFT
 * * WALLS
 * * PAINTBALL
 * * SURVIVAL_GAMES
 * * TNTGAMES
 * * VAMPIREZ
 * * WALLS3
 * * ARCADE
 * * ARENA
 * * UHC
 * * MCGO
 * * WARLORDS
 * * SUPER_SMASH
 * * GINGERBREAD
 * * HOUSING
 * * SKYWARS
 * * TRUE_COMBAT
 * * SPEED_UHC
 * * SKYCLASH
 * * LEGACY
 * * PROTOTYPE
 * * BEDWARS
 * * MURDER_MYSTERY
 * * BUILD_BATTLE
 * * DUELS
 * * SKYBLOCK
 * * PIT
 */
/**
 * @typedef {number} GameId
 * * QUAKECRAFT: `2`
 * * WALLS: `3`
 * * PAINTBALL: `4`
 * * SURVIVAL_GAMES: `5`
 * * TNTGAMES: `6`
 * * VAMPIREZ: `7`
 * * WALLS3: `13`
 * * ARCADE: `14`
 * * ARENA: `17`
 * * UHC: `20`
 * * MCGO: `21`
 * * BATTLEGROUND: `23`
 * * SUPER_SMASH: `24`
 * * GINGERBREAD: `25`
 * * HOUSING: `26`
 * * SKYWARS: `51`
 * * TRUE_COMBAT: `52`
 * * SPEED_UHC: `54`
 * * SKYCLASH: `55`
 * * LEGACY: `56`
 * * PROTOTYPE: `57`
 * * BEDWARS: `58`
 * * MURDER_MYSTERY: `59`
 * * BUILD_BATTLE: `60`
 * * DUELS: `61`
 * * SKYBLOCK: `63`
 * * PIT: `64`
 */
module.exports = Game;
