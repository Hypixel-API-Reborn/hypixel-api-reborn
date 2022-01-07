module.exports = {
  getAPIStatus: require('./getAPIStatus'),
  getBoosters: require('./getBoosters'),
  getFriends: require('./getFriends'),
  getGameCounts: require('./getGameCounts'),
  getGuild: require('./getGuild'),
  getKeyInfo: require('./getKeyInfo'),
  getLeaderboards: require('./getLeaderboards'),
  getPlayer: require('./getPlayer'),
  getRankedSkyWars: require('./getRankedSkyWars'),
  getRecentGames: require('./getRecentGames'),
  getServerInfo: require('./getServerInfo'),
  getStatus: require('./getStatus'),
  getWatchdogStats: require('./getWatchdogStats'),

  getEndedSkyblockAuctions: require('./skyblock/getEndedSkyblockAuctions'),
  getSkyblockAuctions: require('./skyblock/getSkyblockAuctions'),
  getSkyblockAuctionsByPlayer: require('./skyblock/getSkyblockAuctionsByPlayer'),
  getSkyblockBazaar: require('./skyblock/getSkyblockBazaar'),
  getSkyblockMember: require('./skyblock/getSkyblockMember'),
  getSkyblockNews: require('./skyblock/getSkyblockNews'),
  getSkyblockProfiles: require('./skyblock/getSkyblockProfiles')
};
