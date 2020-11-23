const Member = require('./SkyblockMember');
class SkyblockProfile {
  constructor (data) {
    this.profileId = data.profile_id;
    this.profileName = data.profile_name;
    this.gameMode = data.game_mode || null;
    this.members = edit(data.members, this.profileName, this.gameMode).map(m => new Member(m));
    this.me = this.members.find(x => x.uuid === data.me);
  }
}
/**
 * @private
 * @param {Array} members
 * @returns {Array}
 */
function edit (members, profileName, gameMode) {
  const edited = [];
  Object.keys(members).forEach((k) => {
    const m = members[k];
    edited.push({
      uuid: k,
      profileName: profileName,
      gameMode: gameMode,
      m
    });
  });
  return edited;
}

module.exports = SkyblockProfile;
