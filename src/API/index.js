module.exports = {
  getAPIStatus: require('./getAPIStatus'),
  getBoosters: require('./getBoosters'),
  getGameCounts: require('./getGameCounts'),
  getGuild: require('./getGuild'),
  getLeaderboards: require('./getLeaderboards'),
  getPlayer: require('./getPlayer'),
  getRecentGames: require('./getRecentGames'),
  getServerInfo: require('./getServerInfo'),
  getStatus: require('./getStatus'),
  getWatchdogStats: require('./getWatchdogStats'),
  getEndedSkyblockAuctions: require('./skyblock/getEndedSkyblockAuctions'),

  getSkyblockAuctions: require('./skyblock/getSkyblockAuctions'),
  getSkyblockAuctionsByPlayer: require('./skyblock/getSkyblockAuctionsByPlayer'),
  getSkyblockBazaar: require('./skyblock/getSkyblockBazaar'),
  getSkyblockGovernment: require('./skyblock/getSkyblockGovernment'),
  getSkyblockMember: require('./skyblock/getSkyblockMember'),
  getSkyblockNews: require('./skyblock/getSkyblockNews'),
  getSkyblockProfiles: require('./skyblock/getSkyblockProfiles')
};
