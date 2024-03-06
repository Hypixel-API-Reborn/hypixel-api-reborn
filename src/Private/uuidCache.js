/* eslint-disable require-jsdoc */
const requireFetch = !globalThis.fetch;
const externalFetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fetch = requireFetch ? externalFetch : globalThis.fetch;
const NodeCache = require('node-cache');
const cache = new NodeCache();

// TODO - use this for all cache models

module.exports = async (url, query) => {
  if (cache.has(query.toLowerCase())) return cache.get(query.toLowerCase());
  const res = await fetch(url);
  const data = await res.json();
  // Don't cache 4xx
  if (res.status < 400) {
    cache.set(query.toLowerCase(), { id: data.id, name: data.name }, 60 * 60 * 24);
    cache.set(data.id.toLowerCase(), { id: data.id, name: data.name }, 60 * 60 * 24);
  }
  return {
    id: data.id,
    name: data.name
  };
};
