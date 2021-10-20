/* eslint-disable no-console */
/* eslint-disable require-jsdoc */
const fetch = require('node-fetch');
class Updater {
  async checkForUpdates () {
    const currentVersion = require('../../package.json').version;
    const metadata = await fetch('https://api.npms.io/v2/package/hypixel-api-reborn').then((r) => r.json());
    const latestVersion = metadata.message === "Internal server error" ? currentVersion : metadata.collected.metadata.version;
    const compare = this.compare(currentVersion, latestVersion);
    if (compare === -1) {
      this.notify(latestVersion);
    }
  }
  notify (newVersion) {
    console.log(`

    New version of hypixel-api-reborn is available!
    
    v${newVersion}

    npm i hypixel-api-reborn@${newVersion}.
    
    `);
  }
  compare (a, b) {
    const pa = a.split('.');
    const pb = b.split('.');
    for (let i = 0; i < 3; i++) {
      const na = Number(pa[i]);
      const nb = Number(pb[i]);
      if (na > nb) return 1;
      if (nb > na) return -1;
      if (!isNaN(na) && isNaN(nb)) return 1;
      if (isNaN(na) && !isNaN(nb)) return -1;
    }
    return 0;
  }
}
module.exports = Updater;
