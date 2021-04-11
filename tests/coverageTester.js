/* eslint-disable no-console */
const {CoverageTestClient, Controller} = require('./coverageTestV2');
const Client = new CoverageTestClient(process.env.KEY);

const promises = [];

const playerMethods = ['getPlayer', 'getFriends', 'getSkyblockProfiles', 'getSkyblockMember', 'getRecentGames', 'getStatus'];
for (method of playerMethods) {
  const PController = new Controller();
  promises.push(Client[method]('Technoblade', {noCacheCheck: true, controller: PController}).then(PController.getResults.bind(PController)).then(Controller.format).then(console.log.bind(null, method)));
}

const noArgsMethods = ['getBoosters', 'getEndedSkyblockAuctions', 'getSkyblockNews', 'getSkyblockBazaar', 'getBoosters', 'getGameCounts', 'getKeyInfo', 'getLeaderboards', 'getWatchdogStats'];
for (method of noArgsMethods) {
  const PController = new Controller();
  promises.push(Client[method]({noCacheCheck: true, controller: PController}).then(PController.getResults.bind(PController)).then(Controller.format).then(console.log.bind(null, method)));
}

// because guild is special
const PController = new Controller();
// eslint-disable-next-line max-len
promises.push(Client.getGuild('player', 'Technoblade', {noCacheCheck: true, controller: PController}).then(PController.getResults.bind(PController)).then(Controller.format).then(console.log.bind(null, 'getGuild')));

Promise.all(promises).then(finished).catch(finished.bind(null, true));

/**
 * Finish
 * @param {*} error Error if any
 * @param  {...any} args args
 * @returns {void}
 */
function finished(error, ...args) {
  if (error === true) {
    console.warn('\x1b[33mSome endpoints\' coverage data couldn\'t be retrieved.');
    console.error(...args);
    process.exit(0);
  } else {
    console.warn('\x1b[33mProcess Complete - All methods specified have been tested');
    process.exit(0);
  }
}
