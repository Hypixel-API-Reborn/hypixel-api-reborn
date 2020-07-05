const Member = require('./SkyblockMember');
class SkyblockProfile {
  constructor (data) {
    this.profileId = data.profile_id;
    this.profileName = data.profile_name;
    this.members = edit(data.members).map(m => new Member(m));
  }
}
/**
 * @private
 * @param {Array} members
 * @returns {Array}
 */
function edit (members) {
  const edited = [];
  Object.keys(members).forEach((k) => {
    const m = members[k];
    edited.push({ uuid: k, m });
  });
  return edited;
}

module.exports = SkyblockProfile;
