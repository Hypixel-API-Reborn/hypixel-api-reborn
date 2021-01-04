const Rss = require('rss-parser');
const Parser = new Rss();
module.exports = async function () {
  const Status = require('../structures/APIStatus.js');
  const parsed = await Parser.parseURL('https://status.hypixel.net/history.rss');
  return new Status(parsed);
};
