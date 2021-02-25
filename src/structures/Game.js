const games = [
  { name: 'Quake Craft', code: 'QUAKECRAFT' },
  { name: 'Walls', code: 'WALLS' },
  { name: 'Paintball', code: 'PAINTBALL' },
  { name: 'Blitz Survival Games', code: 'SURVIVAL_GAMES' },
  { name: 'The TNT Games', code: 'TNTGAMES' },
  { name: 'VampireZ', code: 'VAMPIREZ' },
  { name: 'Mega Walls', code: 'WALLS3' },
  { name: 'Arcade', code: 'ARCADE' },
  { name: 'Arena Brawl', code: 'ARENA' },
  { name: 'UHC Champions', code: 'UHC' },
  { name: 'Cops and Crims', code: 'MCGO' },
  { name: 'Warlords', code: 'BATTLEGROUND' },
  { name: 'Smash Heroes', code: 'SUPER_SMASH' },
  { name: 'Turbo Kart Racers', code: 'GINGERBREAD' },
  { name: 'Housing', code: 'HOUSING' },
  { name: 'SkyWars', code: 'SKYWARS' },
  { name: 'Crazy Walls', code: 'TRUE_COMBAT' },
  { name: 'Speed UHC', code: 'SPEED_UHC' },
  { name: 'SkyClash', code: 'SKYCLASH' },
  { name: 'Classic Games', code: 'LEGACY' },
  { name: 'Prototype', code: 'PROTOTYPE' },
  { name: 'BedWars', code: 'BEDWARS' },
  { name: 'Murder Mystery', code: 'MURDER_MYSTERY' },
  { name: 'Build Battle', code: 'BUILD_BATTLE' },
  { name: 'Duels', code: 'DUELS' },
  { name: 'SkyBlock', code: 'SKYBLOCK' },
  { name: 'The Pit', code: 'PIT' },
  { name: 'Replay', code: 'REPLAY' },
  { name: 'Limbo', code: 'LIMBO' },
  { name: 'Queue', code: 'QUEUE' },
  { name: 'Main Lobby', code: 'MAIN_LOBBY' },
  { name: 'Tournament Lobby', code: 'TOURNAMENT_LOBBY' },
  { name: 'Idle', code: 'IDLE' }
];
/**
 * Game class
 */
class Game {
  /**
   * @param {GameCode} game Game Code
   */
  constructor (game) {
    this.game = game;
  }

  /**
   * Returns regular game name
   * @return {GameString}
   */
  toString () {
    return games.find((g) => g.code === this.game) ? games.find((g) => g.code === this.game).name : 'Not found';
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
