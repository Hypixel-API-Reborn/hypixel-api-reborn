/* eslint-disable require-jsdoc */
const requireFetch = !globalThis.fetch;
const externalFetch = require('node-fetch');
const fetch = requireFetch ? externalFetch : globalThis.fetch;
const cachedUuids = new Map();

// TODO - use this for all cache models

async function putCache(response) {
  try {
    response = await response.json();
    cachedUuids.set(response.id, response.name);
    setTimeout(deleteCache, 1000 * 60 * 10, response.id);
  } catch (e) {
    // F
  }
}
function deleteCache(id) {
  return cachedUuids.delete(id);
}
function response(obj) {
  return new fetch.Response(JSON.stringify(obj));
}
function checkHit(query) {
  if (cachedUuids.has(query)) return response({ id: query, name: cachedUuids.get(query) });
  const reverseSearch = Array.from(cachedUuids.entries()).find((pair) => pair[1].toLowerCase() === query.toLowerCase());
  if (reverseSearch) return response({ id: reverseSearch[0], name: query });
  return null;
}
module.exports = async (url, query) => {
  if (checkHit(query || url)) return checkHit(query || url);
  const res = await fetch(url);
  const response = await res.clone().json();
  // Don't cache 5xx
  if (response.error !== 'Internal Server Error' && response.status < 500) setTimeout(putCache, 0, res.clone());
  return res;
};
