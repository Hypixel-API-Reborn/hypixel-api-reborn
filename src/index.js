module.exports = {

  Client: require('./Client.js'),
  version: require('../package.json').version,

  /* API Status */
  APIStatus: require('./structures/APIStatus.js'),
  APIIncident: require('./structures/APIIncident.js'),

  Player: require('./structures/Player.js'),
  Game: require('./structures/Game.js'),
  Friend: require('./structures/Friend.js'),
  Status: require('./structures/Status.js'),
  Color: require('./structures/Color.js'),
  KeyInfo: require('./structures/KeyInfo.js'),

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

  /* Skyblock Auctions */
  BaseSkyblockAuction: require('./structures/SkyBlock/Auctions/BaseAuction.js'),
  PartialSkyblockAuction: require('./structures/SkyBlock/Auctions/PartialAuction.js'),
  SkyblockAuction: require('./structures/SkyBlock/Auctions/Auction.js'),
  SkyblockAuctionInfo: require('./structures/SkyBlock/Auctions/AuctionInfo.js'),
  SkyblockAuctionBid: require('./structures/SkyBlock/Auctions/Bid.js'),

  /* Skyblock Bazaar */
  SkyblockBazaarProduct: require('./structures/SkyBlock/Bazzar/Product.js'),
  SkyblockBazaarOrder: require('./structures/SkyBlock/Bazzar/Order.js'),

  /* Booster */
  Booster: require('./structures/Boosters/Booster.js'),

  /* MiniGames */
  ArenaBrawl: require('./structures/MiniGames/ArenaBrawl.js'),
  BedWars: require('./structures/MiniGames/BedWars.js'),
  BlitzSurvivalGames: require('./structures/MiniGames/BlitzSurvivalGames.js'),
  BuildBattle: require('./structures/MiniGames/BuildBattle.js'),
  CopsAndCrims: require('./structures/MiniGames/CopsAndCrims.js'),
  Duels: require('./structures/MiniGames/Duels.js'),
  MegaWalls: require('./structures/MiniGames/MegaWalls.js'),
  MurderMystery: require('./structures/MiniGames/MurderMystery.js'),
  SkyWars: require('./structures/MiniGames/SkyWars.js'),
  SmashHeroes: require('./structures/MiniGames/SmashHeroes.js'),
  SpeedUHC: require('./structures/MiniGames/SpeedUHC.js'),
  TNTGames: require('./structures/MiniGames/TNTGames.js'),
  UHC: require('./structures/MiniGames/UHC.js'),
  VampireZ: require('./structures/MiniGames/VampireZ.js'),

  /* Leaderboards */
  Leaderboard: require('./structures/Leaderboard.js'),

  /* Errors */
  Errors: require('./Errors.js'),

  /* Utils */
  Utils: require('./utils')
};
