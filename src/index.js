module.exports = {

  Client: require('./Client'),
  version: require('../package.json').version,

  Player: require('./structures/Player'),
  Game: require('./structures/Game'),
  Friend: require('./structures/Friend'),
  Status: require('./structures/Status'),
  Color: require('./structures/Color'),
  KeyInfo: require('./structures/KeyInfo'),

  /* Watchdog */
  WatchdogStats: require('./structures/Watchdog/Stats'),

  /* Guild */
  Guild: require('./structures/Guild/Guild'),
  GuildMember: require('./structures/Guild/GuildMember'),
  GuildRank: require('./structures/Guild/GuildRank'),

  /* SkyBlock */
  SkyblockProfile: require('./structures/SkyBlock/SkyblockProfile'),
  SkyblockMember: require('./structures/SkyBlock/SkyblockMember'),
  SkyblockArmor: require('./structures/SkyBlock/SkyblockArmor'),
  SkyblockItem: require('./structures/SkyBlock/SkyblockItem'),

  /* Skyblock Auctions */
  SkyblockAuction: require('./structures/SkyBlock/Auctions/Auction'),
  SkyblockAuctionBid: require('./structures/SkyBlock/Auctions/Bid'),

  /* Skyblock Bazaar */
  SkyblockBazaarProduct: require('./structures/SkyBlock/Bazzar/Product'),
  SkyblockBazaarOrder: require('./structures/SkyBlock/Bazzar/Order'),

  /* Booster */
  Booster: require('./structures/Boosters/Booster'),

  /* MiniGames */
  ArenaBrawl: require('./structures/MiniGames/ArenaBrawl'),
  BedWars: require('./structures/MiniGames/BedWars'),
  BlitzSurvivalGames: require('./structures/MiniGames/BlitzSurvivalGames'),
  BuildBattle: require('./structures/MiniGames/BuildBattle'),
  CopsAndCrims: require('./structures/MiniGames/CopsAndCrims'),
  CrazyWalls: require('./structures/MiniGames/CrazyWalls'),
  Duels: require('./structures/MiniGames/Duels'),
  MegaWalls: require('./structures/MiniGames/MegaWalls'),
  MurderMystery: require('./structures/MiniGames/MurderMystery'),
  SkyWars: require('./structures/MiniGames/SkyWars'),
  SmashHeroes: require('./structures/MiniGames/SmashHeroes'),
  SpeedUHC: require('./structures/MiniGames/SpeedUHC'),
  TNTGames: require('./structures/MiniGames/TNTGames'),
  UHC: require('./structures/MiniGames/UHC'),
  VampireZ: require('./structures/MiniGames/VampireZ'),

  /* Leaderboards */
  Leaderboard: require('./structures/Leaderboard'),

  /* Errors */
  Errors: require('./Errors')
};
