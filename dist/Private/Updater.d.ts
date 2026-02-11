import Client from '../Client.js';
declare class Updater {
    readonly client: Client;
    currentVersion: string;
    latestVersion: string;
    constructor(client: Client);
    checkForUpdates(): Promise<void>;
    getLatestVersion(): Promise<string>;
    compareVersions(a: string, b: string): boolean;
}
export default Updater;
//# sourceMappingURL=Updater.d.ts.map