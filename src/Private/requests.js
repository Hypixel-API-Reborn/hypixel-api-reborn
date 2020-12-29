const fetch = require('node-fetch');
const BASE_URL = 'https://api.hypixel.net';
const Errors = require('../Errors');
const cached = new Map();
module.exports = class Requests {
  async request (url, options = {}) {
    const res = await fetch(BASE_URL + url + (/\?/.test(url) ? '&' : '?') + `key=${this.key}`, options);
    if (res.status === 522) throw new Error(Errors.ERROR_STATUSTEXT.replace(/{statustext}/, '522 Connection Timed Out'));
    const parsedRes = await res.json().catch(() => {
      throw new Error(Errors.INVALID_RESPONSE_BODY);
    });
    if (res.status === 400) throw new Error(Errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(/{cause}/, (parsedRes.cause || '')));
    if (res.status === 403) throw new Error(Errors.INVALID_API_KEY);
    if (res.status !== 200) throw new Error(Errors.ERROR_STATUSTEXT.replace(/{statustext}/, res.statusText));
    if (!parsedRes.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }
    parsedRes._headers = res.headers;
    if (options.noCaching) return parsedRes;
    // split by question mark : first part is /path, remove /
    if (this.options.cache && this.options.cacheFilter(url.split('?')[0].slice(1))) {
      if (this.options.cacheSize < cached.size) cached.delete(cached.keys().next().value); // Map and its special "iterators"
      cached.set(url, parsedRes);
      if (this.options.cacheTime >= 0) setTimeout(() => cached.delete(url), 1000 * this.options.cacheTime);
    }
    return parsedRes;
  }

  get cache () {
    return cached;
  }

  async sweepCache (amount) {
    if (!amount || amount >= cached.size) return cached.clear();
    return Array.from(cached.keys()).slice(cached.size - amount).map(x => cached.delete(x));
  }
};
