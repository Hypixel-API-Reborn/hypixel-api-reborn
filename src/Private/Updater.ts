import Client from '../Client.js';
import Errors from '../Errors.ts';
import packageJson from '../../package.json' with { type: 'json' };

class Updater {
  readonly client: Client;
  currentVersion: string;
  latestVersion: string;
  constructor(client: Client) {
    this.client = client;
    this.currentVersion = packageJson.version;
    this.latestVersion = '0.0.0';
  }

  async checkForUpdates(): Promise<void> {
    this.latestVersion = await this.getLatestVersion();
    const compare = this.compareVersions(this.currentVersion, this.latestVersion);
    if (compare) {
      console.log(
        `New version of hypixel-api-reborn is available! Current version: ${
          this.currentVersion
        }, Latest version: ${this.latestVersion}`
      );
    }
  }

  async getLatestVersion(): Promise<string> {
    const request = await this.client.requestHandler.fetchExternalData('https://registry.npmjs.org/hypixel-api-reborn');
    if (request.statusCode !== 200) throw new Error(Errors.UPDATER_REQUEST_NOT_OK);
    return request.data['dist-tags'].latest;
  }

  compareVersions(a: string, b: string): boolean {
    const pa = a.split('.');
    const pb = b.split('.');
    for (let i = 0; i < 3; i++) {
      const na = Number(pa[i]);
      const nb = Number(pb[i]);
      if (isNaN(na) || isNaN(nb)) return false;
      if (na > nb) return false;
      if (nb > na) return true;
    }
    return false;
  }
}

export default Updater;
