/* eslint-disable require-jsdoc */
/* eslint-disable no-console */
const requireFetch = !globalThis.fetch;
const externalFetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fetch = requireFetch ? externalFetch : globalThis.fetch;
const Errors = require('../Errors');
class Updater {
  async checkForUpdates() {
    const version = require('../../package.json').version;
    const request = await fetch('https://registry.npmjs.org/hypixel-api-reborn');
    if (!request.ok) return console.log(Errors.UPDATER_REQUEST_NOT_OK);
    const metadata = await request.json();
    const latest = metadata['dist-tags'].latest;
    const compare = this.compare(version, latest);
    if (compare === -1) {
      console.log(
        `New version of hypixel-api-reborn is available! Current version: ${version}, Latest version: ${latest}`
      );
    }
  }
  compare(a, b) {
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
