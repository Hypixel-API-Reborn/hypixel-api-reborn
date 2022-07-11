module.exports = {
  getAPIStatus: require('./getAPIStatus.js'),
  getAchievements: require('./getAchievements.js'),
  getBoosters: require('./getBoosters.js'),
  getChallenges: require('./getChallenges.js'),
  getFriends: require('./getFriends.js'),
  getGameCounts: require('./getGameCounts.js'),
  getGuild: require('./getGuild.js'),
  getGuildAchievements: require('./getGuildAchievements.js'),
  getKeyInfo: require('./getKeyInfo.js'),
  getLeaderboards: require('./getLeaderboards.js'),
  getPlayer: require('./getPlayer.js'),
  getQuests: require('./getQuests.js'),
  getRankedSkyWars: require('./getRankedSkyWars.js'),
  getRecentGames: require('./getRecentGames.js'),
  getServerInfo: require('./getServerInfo.js'),
  getStatus: require('./getStatus.js'),
  getVanityCompanions: require('./getVanityCompanions.js'),
  getVanityPets: require('./getVanityPets.js'),
  getWatchdogStats: require('./getWatchdogStats.js'),

  skyblock: {
    getEndedAuctions: require('./skyblock/getEndedAuctions.js'),
    getBingoByPlayer: require('./skyblock/getBingoByPlayer.js'),
    getAuction: require('./skyblock/getAuction.js'),
    getAuctions: require('./skyblock/getAuctions.js'),
    getAuctionsByPlayer: require('./skyblock/getAuctionsByPlayer.js'),
    getBazaar: require('./skyblock/getBazaar.js'),
    getBingo: require('./skyblock/getBingo.js'),
    getGovernment: require('./skyblock/getGovernment.js'),
    getMember: require('./skyblock/getMember.js'),
    getNews: require('./skyblock/getNews.js'),
    getProfiles: require('./skyblock/getProfiles.js')
  }
};
