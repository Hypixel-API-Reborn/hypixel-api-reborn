const SkyblockMember = require('./SkyblockMember');
/**
 * Skyblock Profile class
 */
class SkyblockProfile {
  /**
   * Skyblock profile data
   * @param {object} data
   */
  constructor (data) {
    /**
     * Skyblock profile ID
     * @type {string}
     */
    this.profileId = data.profile_id;
    /**
     * Skyblock profile name
     * @type {string}
     */
    this.profileName = data.profile_name;
    /**
     * Skyblock profile members
     * @type {SkyblockMember[]}
     */
    this.members = edit(data.members, this.profileName).map((m) => new SkyblockMember(m));
    /**
     * Queried player's member stats
     * @type {SkyblockMember}
     */
    this.me = this.members.find((x) => x.uuid === data.me);
  }
  /**
   * Profile Name
   * @return {string}
   */
  toString() {
    return this.profileName;
  }
}

/**
 * @private
 * @param {Array} members
 * @param {string} profileName
 * @return {Array}
 */
function edit (members, profileName) {
  const edited = [];
  Object.keys(members).forEach((k) => {
    const m = members[k];
    edited.push({
      uuid: k,
      profileName,
      m
    });
  });
  return edited;
}

module.exports = SkyblockProfile;
