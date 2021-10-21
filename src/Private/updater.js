/* eslint-disable no-console */
/* eslint-disable require-jsdoc */
const fetch = require('node-fetch');
const Errors = require('../Errors');
class Updater {
  async checkForUpdates () {
    const currentVersion = require('../../package.json').version;
    const request = await fetch('https://registry.npmjs.org/hypixel-api-reborn');
    if (!request.ok) return console.log(Errors.UPDATER_REQUEST_NOT_OK);
    const metadata = await request.json();
    const latestVersion = metadata['dist-tags'].latest;
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
