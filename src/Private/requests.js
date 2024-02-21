/* eslint-disable require-jsdoc */
const requireFetch = !globalThis.fetch;
const BASE_URL = 'https://api.hypixel.net/v2';
const Errors = require('../Errors');
const Cache = require('./defaultCache');
const Client = require('../Client.js');

class Requests {
  constructor(client, cache) {
    if (cache && !this.validateCustomCache()) throw new Error(Errors.INVALID_CACHE_HANDLER);
    this.cached = cache || new Cache();
    this.client = client;
  }
  async request(endpoint, options = {}) {
    options.headers = { 'API-Key': this.client.key, ...options.headers };
    const fetchMethod = requireFetch ? await import('node-fetch').then({default: fetch}=>fetch) : fetch;
    /**
     * @type {externalFetch.Response|Response}
     */
    const res = await fetchMethod(BASE_URL + endpoint, options);
    if (res.status >= 500 && res.status < 528) throw new Error(Errors.ERROR_STATUSTEXT.replace(/{statustext}/, `Server Error : ${res.status} ${res.statusText}`));
    const parsedRes = await res.json().catch(() => {
      throw new Error(Errors.INVALID_RESPONSE_BODY);
    });
    if (res.status === 400) throw new Error(Errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(/{cause}/, parsedRes.cause || ''));
    if (res.status === 403) throw new Error(Errors.INVALID_API_KEY);
    if (res.status === 422) throw new Error(Errors.UNEXPECTED_ERROR);
    if (res.status === 429) throw new Error(Errors.RATE_LIMIT_EXCEEDED);
    if (res.status !== 200) throw new Error(Errors.ERROR_STATUSTEXT.replace(/{statustext}/, res.statusText));
    if (!parsedRes.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }
    parsedRes._headers = res.headers;
    parsedRes.raw = !!options.raw;
    if (options.noCaching) return parsedRes;
    // split by question mark : first part is /path, remove /
    if (this.client.options.cache && this.client.options.cacheFilter(endpoint.split('?')[0].slice(1))) {
      if (this.client.options.cacheSize < (await this.cached.size())) await this.cached.delete(Array.from(await this.cached.keys())[0]);
      await this.cached.delete(endpoint);
      await this.cached.set(endpoint, parsedRes);
      if (this.client.options.hypixelCacheTime >= 0) setTimeout(() => this.cached.delete(endpoint), 1000 * this.client.options.hypixelCacheTime);
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
    return !!(cache.set && cache.get && cache.delete && cache.keys);
  }
}

module.exports = Requests;
