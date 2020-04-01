const Member = require('./Member');
class SkyblockProfile {

	constructor(data) {
		this.profile_id = data['profile_id'];
		this.profile_name = data['profile_name'];
		this.members = edit(data.members).map(m => new Member(m));
	}

}

/**
 * 
 * @param {object} members 
 * 
 * @returns {Array}
 */
function edit(members) {
	let edited = [];
	Object.keys(members).forEach((k) => {
		let m = members[k];
		edited.push({uuid: k, m});
	});
	return edited;
}

module.exports = SkyblockProfile;
