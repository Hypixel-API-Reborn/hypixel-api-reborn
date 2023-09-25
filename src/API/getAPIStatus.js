const Rss = require('rss-parser');
const Parser = new Rss();
module.exports = async function (options) {
  const Status = require('../structures/APIStatus.js');
  const parsed = await Parser.parseURL('https://status.hypixel.net/history.rss');
  if (options.raw) return parsed;
  return new Status(parsed);
};
