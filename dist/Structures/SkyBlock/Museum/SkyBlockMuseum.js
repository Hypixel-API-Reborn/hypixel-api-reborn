import SkyBlockMuseumMember from './SkyBlockMuseumMember.js';
class SkyBlockMuseum {
    members;
    constructor(data) {
        const members = data?.members || {};
        this.members = Object.keys(members).reduce((obj, key) => {
            obj[key] = new SkyBlockMuseumMember(members?.[key] || {});
            return obj;
        }, {});
    }
    isRaw() {
        return false;
    }
}
export default SkyBlockMuseum;
//# sourceMappingURL=SkyBlockMuseum.js.map