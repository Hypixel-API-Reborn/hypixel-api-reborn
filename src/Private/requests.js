const requireFetch = !globalThis.fetch;
const externalFetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fetch = requireFetch ? externalFetch : globalThis.fetch;
const BASE_URL = 'https://api.hypixel.net/v2';
const Cache = require('./defaultCache');
const Errors = require('../Errors');

class Requests {
  constructor(client, cache) {
    if (cache && !this.validateCustomCache()) throw new Error(Errors.INVALID_CACHE_HANDLER);
    this.cached = cache || new Cache();
    this.client = client;
  }
  async request(endpoint, options = {}) {
    options.headers = { 'API-Key': this.client.key, ...options.headers };
    /**
     * @type {externalFetch.Response|Response}
     */
    const res = await fetch(BASE_URL + endpoint, options);
    if (500 <= res.status && 528 > res.status) {
      throw new Error(
        Errors.ERROR_STATUSTEXT.replace(/{statustext}/, `Server Error : ${res.status} ${res.statusText}`)
      );
    }
    const parsedRes = await res.json().catch(() => {
      throw new Error(Errors.INVALID_RESPONSE_BODY);
    });
    if (400 === res.status) {
      throw new Error(
        Errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(/{cause}/, parsedRes.cause || '')
      );
    }
    if (403 === res.status) throw new Error(Errors.INVALID_API_KEY);
    if (422 === res.status) throw new Error(Errors.UNEXPECTED_ERROR);
    if (
      429 === res.status &&
      'You have already looked up this player too recently, please try again shortly' === parsedRes.cause
    ) {
      throw new Error(Errors.RECENT_REQUEST);
    }
    if (429 === res.status) throw new Error(Errors.RATE_LIMIT_EXCEEDED);
    if (200 !== res.status) throw new Error(Errors.ERROR_STATUSTEXT.replace(/{statustext}/, res.statusText));
    if (!parsedRes.success && !endpoint.startsWith('/housing')) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }
    // eslint-disable-next-line no-underscore-dangle
    parsedRes._headers = res.headers;
    parsedRes.raw = Boolean(options.raw);
    if (options.noCaching) return parsedRes;
    // split by question mark : first part is /path, remove /
    if (this.client.options.cache && this.client.options.cacheFilter(endpoint.split('?')[0].slice(1))) {
      if (this.client.options.cacheSize < (await this.cached.size())) {
        await this.cached.delete(Array.from(await this.cached.keys())[0]);
      }
      await this.cached.delete(endpoint);
      await this.cached.set(endpoint, parsedRes);
      if (0 <= this.client.options.hypixelCacheTime) {
        setTimeout(() => this.cached.delete(endpoint), 1000 * this.client.options.hypixelCacheTime);
      }
    }
    return parsedRes;
  }

  get cache() {
    return this.cached;
  }

  async sweepCache(amount) {
    if (!amount || amount >= (await this.cached.size())) return await this.cached.clear();
    return await Promise.all(
      Array.from(await this.cached.keys())
        .slice((await this.cached.size()) - amount)
        .map((x) => this.cached.delete(x))
    );
  }

  validateCustomCache(cache) {
    return Boolean(cache.set && cache.get && cache.delete && cache.keys);
  }
}

module.exports = Requests;
