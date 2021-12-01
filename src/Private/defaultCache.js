/**
 * This is the default cache implementation, using a Map.
 * All cache implementations must have these methods below, they can be async :
 * set(key, value) : Sets key to value
 * has(key) : Whether there is an entry to this key. (can be an alias to get)
 * get(key) : Gets by key (nullish value if not found)
 * delete(key) : Deletes by key
 * keys() : Array of keys, ordered by time of creation. To help you, the key will be deleted and set in case of an update
 * size(): Size of cache (number of keys)
 * clear(): Deletes all cache entries
 * See JSDoc for more info
 */
class Cache {
  /**
   * Constructor
   */
  constructor() {
    this.storage = new Map();
  }
  /**
   * Sets an entry
   * @param {string} key String key
   * @param {*} value Any value
   * @return {boolean}
   */
  set(key, value) {
    return this.storage.set(key, value);
  }
  /**
   * Check if there's an entry in the cache that has this key
   * This doesn't have to return boolean, just a truthy/falsy value
   * @param {string} key String key
   * @return {boolean} Whether this key exists
   */
  has(key) {
    return this.storage.has(key);
  }
  /**
   * Gets an entry, return a nullish value if not found
   * @param {string} key String key
   * @return {*}
   */
  get(key) {
    return this.storage.get(key);
  }
  /**
   * Deletes an entry
   * @param {string} key String key
   * @return {boolean} Preferably, returns a boolean to check if the deletion is actually successful
   */
  delete(key) {
    return this.storage.delete(key);
  }
  /**
   * Returns Array of string (not an iterator preferably, it can break)
   * @return {string[]}
   */
  keys() {
    return Array.from(this.storage.keys());
  }
  /**
   * Returns size of cache
   * @return {number}
   */
  size() {
    return this.storage.size;
  }
  /**
   * Clears cache
   * @return {void}
   */
  clear() {
    this.storage.clear();
  }
}

module.exports = Cache;

