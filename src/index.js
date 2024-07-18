module.exports = {
  Client: require('./Client.js'),
  version: require('../package.json').version,

  /* API Status */
  APIStatus: require('./structures/APIStatus.js'),
  APIIncident: require('./structures/APIIncident.js'),

  Player: require('./structures/Player.js'),
  Game: require('./structures/Game.js'),
  Status: require('./structures/Status.js'),
  Color: require('./structures/Color.js'),
  Pet: require('./structures/Pet'),
  Pets: require('./structures/Pets'),
  PlayerCosmetics: require('./structures/PlayerCosmetics'),

  /* Challenges */
  Challenges: require('./structures/Static/Challenges.js'),
  GameChallenges: require('./structures/Static/GameChallenges.js'),

  /* Watchdog */
  WatchdogStats: require('./structures/Watchdog/Stats.js'),

  /* Guild */
  Guild: require('./structures/Guild/Guild.js'),
  GuildMember: require('./structures/Guild/GuildMember.js'),
  GuildRank: require('./structures/Guild/GuildRank.js'),

  /* SkyBlock */
  SkyblockProfile: require('./structures/SkyBlock/SkyblockProfile.js'),
  SkyblockMember: require('./structures/SkyBlock/SkyblockMember.js'),
  SkyblockInventoryItem: require('./structures/SkyBlock/SkyblockInventoryItem.js'),
  SkyblockPet: require('./structures/SkyBlock/SkyblockPet'),
  GovernmentData: require('./structures/SkyBlock/Static/Government.js'),
  Candidate: require('./structures/SkyBlock/Static/Candidate.js'),
  BingoData: require('./structures/SkyBlock/Static/BingoData.js'),
  Bingo: require('./structures/SkyBlock/Static/Bingo.js'),

  /* Skyblock Auctions */
  BaseAuction: require('./structures/SkyBlock/Auctions/BaseAuction.js'),
  PartialAuction: require('./structures/SkyBlock/Auctions/PartialAuction.js'),
  Auction: require('./structures/SkyBlock/Auctions/Auction.js'),
  AuctionInfo: require('./structures/SkyBlock/Auctions/AuctionInfo.js'),
  Bid: require('./structures/SkyBlock/Auctions/Bid.js'),
  FireSale: require('./structures/SkyBlock/Static/FireSale.js'),

  /* Skyblock Bazaar */
  Product: require('./structures/SkyBlock/Bazzar/Product.js'),
  Order: require('./structures/SkyBlock/Bazzar/Order.js'),

  /* Skyblock News */
  SkyblockNews: require('./structures/SkyBlock/News/SkyblockNews'),

  /* Booster */
  Booster: require('./structures/Boosters/Booster.js'),

  /* MiniGames */
  Arcade: require('./structures/MiniGames/Arcade.js'),
  ArenaBrawl: require('./structures/MiniGames/ArenaBrawl.js'),
  BedWars: require('./structures/MiniGames/BedWars.js'),
  BlitzSurvivalGames: require('./structures/MiniGames/BlitzSurvivalGames.js'),
  BuildBattle: require('./structures/MiniGames/BuildBattle.js'),
  CopsAndCrims: require('./structures/MiniGames/CopsAndCrims.js'),
  Duels: require('./structures/MiniGames/Duels.js'),
  MegaWalls: require('./structures/MiniGames/MegaWalls.js'),
  MurderMystery: require('./structures/MiniGames/MurderMystery.js'),
  Paintball: require('./structures/MiniGames/Paintball.js'),
  Pit: require('./structures/MiniGames/Pit.js'),
  Quakecraft: require('./structures/MiniGames/Quakecraft.js'),
  SkyWars: require('./structures/MiniGames/SkyWars.js'),
  SmashHeroes: require('./structures/MiniGames/SmashHeroes.js'),
  SpeedUHC: require('./structures/MiniGames/SpeedUHC.js'),
  TNTGames: require('./structures/MiniGames/TNTGames.js'),
  TurboKartRacers: require('./structures/MiniGames/TurboKartRacers.js'),
  UHC: require('./structures/MiniGames/UHC.js'),
  VampireZ: require('./structures/MiniGames/VampireZ.js'),
  Walls: require('./structures/MiniGames/Walls.js'),
  Warlords: require('./structures/MiniGames/Warlords.js'),
  WoolWars: require('./structures/MiniGames/WoolWars.js'),

  /* Leaderboards */
  Leaderboard: require('./structures/Leaderboard.js'),

  /* Server Info */
  ServerInfo: require('./structures/ServerInfo.js'),

  /* Errors */
  Errors: require('./Errors.js'),

  /* Utils */
  Utils: require('./utils')
};
