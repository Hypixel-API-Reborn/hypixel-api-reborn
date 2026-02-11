import Client from '../Client.js';
import NodeCache from 'node-cache';
class CacheHandler {
    client;
    constructor(client) {
        this.client = client;
        this.cache = new NodeCache({
            stdTTL: this.client.options.cacheTime,
            maxKeys: this.client.options.cacheMaxKeys,
            checkperiod: this.client.options.cacheCheckPeriod
        });
    }
    set(key, value) {
        return this.cache.set(key, value);
    }
    has(key) {
        return this.cache.has(key);
    }
    get(key) {
        return this.cache.get(key);
    }
    keys() {
        return this.cache.keys();
    }
    size() {
        return this.cache.keys().length;
    }
    clear() {
        this.cache.flushAll();
    }
}
export default CacheHandler;
//# sourceMappingURL=CacheHandler.js.map