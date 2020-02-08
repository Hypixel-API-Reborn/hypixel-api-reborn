class SBProfile {

    constructor(data) {
        this.profile_id = data['profile_id'];
        this.profile_name = data['profile_name'];
        this.members = data.members;

    }

}

module.exports = SBProfile;
