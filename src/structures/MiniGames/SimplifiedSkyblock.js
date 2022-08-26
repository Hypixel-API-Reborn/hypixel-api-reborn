/**
 * Skyblock for player endpoint - Little information avail. but better than nothing
 */
class SimplifiedSkyblock {
  /**
   * Constructor
   * @param {Object} data data
   */
  constructor (data) {
    const formattedProfiles = Object.entries(data?.profiles || {}).map(([key, val])=>[key, {
      name: val.cute_name,
      id: val.profile_id
    }]);
    /**
     * @type {SimplifiedSkyblockProfilesList<string, SimplifiedSkyblockProfile>}
     */
    this.profiles = new SimplifiedSkyblockProfilesList(formattedProfiles);
  }
}

/**
 * Custom map
 */
class SimplifiedSkyblockProfilesList extends Map {
  /**
   * Constructor
   * @param  {...any} args constructor
   */
  constructor (...args) {
    super(...args);
  }
  /**
   * Gets profile by name
   * @param {string} query Query (case-insensitive)
   * @return {SimplifiedSkyblockProfile|null}
   */
  getProfileByName(query) {
    return Array.from(this.values()).find(({name}) => name.toLowerCase() === query.toLowerCase());
  }
}

/**
 * @typedef {Object} SimplifiedSkyblockProfile
 * @property {string} name Cute name of profile
 * @property {string} id Profile ID
 */
module.exports = SimplifiedSkyblock;
