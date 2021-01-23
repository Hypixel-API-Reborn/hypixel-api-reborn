const SkyblockMember = require('./SkyblockMember');
/**
 * Skyblock Profile class
 */
class SkyblockProfile {
  /**
   * @param {object} data Skyblock profile data
   */
  constructor (data) {
    /**
     * @type {string} Skyblock profile ID
     */
    this.profileId = data.profile_id;
    /**
     * @type {string} Skyblock profile name
     */
    this.profileName = data.profile_name;
    /**
     * @type {SkyblockMember[]} Skyblock profile members
     */
    this.members = edit(data.members, this.profileName).map((m) => new SkyblockMember(m));
    /**
     * @type {SkyblockMember} Queried player's member stats
     */
    this.me = this.members.find((x) => x.uuid === data.me);
  }
}

/**
 * @private
 * @param {Array} members
 * @param {string} profileName
 * @param {string} gameMode
 * @return {Array}
 */
function edit (members, profileName, gameMode) {
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
