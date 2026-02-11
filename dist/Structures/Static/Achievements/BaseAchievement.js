class BaseAchievement {
    codeName;
    name;
    description;
    secret;
    legacy;
    constructor(achievementName, data) {
        this.codeName = achievementName;
        this.name = data.name || 'UNKNOWN';
        this.description = data.description || 'UNKNOWN';
        this.secret = data.secret || false;
        this.legacy = data.legacy || false;
    }
    toString() {
        return this.codeName;
    }
}
export default BaseAchievement;
//# sourceMappingURL=BaseAchievement.js.map