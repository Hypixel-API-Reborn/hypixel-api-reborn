import API from './API/index.js';
import CacheHandler from './Private/CacheHandler.js';
import Errors from './Errors.js';
import Functions from './Private/Functions.js';
import RateLimit from './Private/RateLimit.js';
import RequestHandler from './Private/RequestHandler.js';
import Updater from './Private/Updater.js';
const clients = [];
class Client {
    key;
    constructor(key, options) {
        this.key = key;
        if (!this.key.length)
            throw new Error(Errors.NO_API_KEY);
        this.options = this.parasOptions(options);
        this.requestHandler = new RequestHandler(this);
        this.cacheHandler = new CacheHandler(this);
        this.functions = new Functions(this);
        this.updater = new Updater(this);
        this.rateLimit = new RateLimit(this);
        if (this.options.rateLimit !== 'NONE')
            this.rateLimit.initialize();
        for (const func in API) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const endpoint = new API[func](this);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            this[func] = endpoint.execute.bind(endpoint);
        }
        if (clients.find((x) => x.key === key)) {
            console.warn(Errors.MULTIPLE_INSTANCES);
            const found = clients.find((x) => x.key === key);
            if (found) {
                this.destroy();
                Object.assign(this, found);
            }
            return;
        }
        if (this.options.checkForUpdates) {
            this.interval = setInterval(() => {
                this.updater.checkForUpdates();
            }, 1000 * 60 * (this.options.checkForUpdatesInterval ?? 60));
        }
        clients.push(this);
    }
    destroy() {
        const clientIndex = clients.findIndex((client) => client.key === this.key);
        if (clientIndex !== -1)
            clients.splice(clientIndex, 1);
        if (this.interval)
            clearInterval(this.interval);
        if (this.rateLimit.interval)
            clearInterval(this.rateLimit.interval);
    }
    parasOptions(options) {
        return {
            cache: options?.cache ?? true,
            cacheTime: options?.cacheTime ?? 300,
            cacheMaxKeys: options?.cacheMaxKeys ?? -1,
            cacheCheckPeriod: options?.cacheCheckPeriod ?? 180,
            rateLimit: options?.rateLimit ?? 'AUTO',
            silent: options?.silent ?? false,
            checkForUpdates: options?.checkForUpdates ?? true,
            checkForUpdatesInterval: options?.checkForUpdatesInterval ?? 60
        };
    }
    /* v8 ignore next 140 */
    getAchievements(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getActiveHouses(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getBoosters(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getChallenges(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getGameCounts(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getGuild(searchParameter, query, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getGuildAchievements(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getHouse(query, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getLeaderboards(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getPlayer(query, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getPlayerHouses(query, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getQuests(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getRecentGames(query, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockAuction(type, query, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockAuctions(query, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockBazaar(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockBingo(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockCollections(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockElection(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockEndedAuctions(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockFireSales(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockGarden(profileId, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockItems(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockMuseum(profileId, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockNews(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockProfile(profileId, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockProfiles(query, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getSkyBlockSkills(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getStatus(query, options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
    getWatchdogStats(options) {
        throw new Error(Errors.ENDPOINT_NOT_LOADED);
    }
}
export default Client;
//# sourceMappingURL=Client.js.map