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
class Game {
  constructor (game) {
    this.game = game;
  }

  toString () {
    if (isNaN(this.game)) {
      return games.find(g => g.code === this.game) ? games.find(g => g.code === this.game).name : 'Not found';
    } else {
      return games.find(g => g.id === this.game) ? games.find(g => g.id === this.game).name : 'Not found';
    }
  }

  get id () {
    if (isNaN(this.game)) {
      return games.find(g => g.code === this.game) ? games.find(g => g.code === this.game).id : 'Not found';
    }
    return this.game;
  }

  get code () {
    if (!isNaN(this.game)) {
      return games.find(g => g.id === this.game) ? games.find(g => g.id === this.game).id : 'Not found';
    }
    return this.game;
  }
}
module.exports = Game;
