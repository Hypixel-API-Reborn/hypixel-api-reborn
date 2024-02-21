/* eslint-disable require-jsdoc */
const requireFetch = !globalThis.fetch;
const externalFetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fetch = requireFetch ? externalFetch : globalThis.fetch;
const cachedUuids = new Map();

// TODO - use this for all cache models

class UUIDCache {
  constructor(client) {
    this.client = client;
  }
  async putCache(response) {
    try {
      response = await response.json();
      cachedUuids.set(response.id, response.name);
      setTimeout(deleteCache, this.client.options.mojangCacheTime * 1000, response.id);
    } catch (e) {
      // F
    }
  }
  deleteCache(id) {
    return cachedUuids.delete(id);
  }
  response(obj) {
    return new fetch.Response(JSON.stringify(obj));
  }
  checkHit(query) {
    if (cachedUuids.has(query)) return response({ id: query, name: cachedUuids.get(query) });
    const reverseSearch = Array.from(cachedUuids.entries()).find((pair) => pair[1].toLowerCase() === query.toLowerCase());
    if (reverseSearch) return response({ id: reverseSearch[0], name: query });
    return null;
  }
}

module.exports = async (url, query) => {
  const cache = new UUIDCache();
  if (cache.checkHit(query || url)) return cache.checkHit(query || url);
  const res = await fetch(url);
  const response = await res.clone().json();
  // Don't cache 5xx
  if (response.error !== 'Internal Server Error' && response.status < 500) setTimeout(cache.putCache, 0, res.clone());
  return res;
};
