const fetch = require('node-fetch');
module.exports = async function (server = 'mc.hypixel.net') {
  const res = await fetch(`https://api.mcsrvstat.us/2/${server}`).then((r) => r.json());
  return res.players?.online ?? 0; // TODO - use this to full potential
};
