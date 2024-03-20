module.exports = {
  getAchievements: require('./getAchievements.js'),
  getAPIStatus: require('./getAPIStatus.js'),
  getBoosters: require('./getBoosters.js'),
  getChallenges: require('./getChallenges.js'),
  getGameCounts: require('./getGameCounts.js'),
  getGuild: require('./getGuild.js'),
  getGuildAchievements: require('./getGuildAchievements.js'),
  getLeaderboards: require('./getLeaderboards.js'),
  getPlayer: require('./getPlayer.js'),
  getQuests: require('./getQuests.js'),
  getRecentGames: require('./getRecentGames.js'),
  getServerInfo: require('./getServerInfo.js'),
  getStatus: require('./getStatus.js'),
  getWatchdogStats: require('./getWatchdogStats.js'),

  skyblock: {
    getAuction: require('./skyblock/getAuction.js'),
    getAuctions: require('./skyblock/getAuctions.js'),
    getAuctionsByPlayer: require('./skyblock/getAuctionsByPlayer.js'),
    getBazaar: require('./skyblock/getBazaar.js'),
    getBingo: require('./skyblock/getBingo.js'),
    getBingoByPlayer: require('./skyblock/getBingoByPlayer.js'),
    getEndedAuctions: require('./skyblock/getEndedAuctions.js'),
    getFireSales: require('./skyblock/getFireSales.js'),
    getGovernment: require('./skyblock/getGovernment.js'),
    getMember: require('./skyblock/getMember.js'),
    getMuseum: require('./skyblock/getMuseum.js'),
    getNews: require('./skyblock/getNews.js'),
    getProfiles: require('./skyblock/getProfiles.js')
  }
};
