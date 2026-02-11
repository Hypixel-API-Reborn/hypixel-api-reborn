import SkyWarsMode from "./SkyWarsMode/SkyWarsMode.js";
class SkyWarsMini extends SkyWarsMode {
    normal;
    constructor(data) {
        super(data, 'mini');
        this.normal = new SkyWarsMode(data, 'mini_normal');
    }
}
export default SkyWarsMini;
//# sourceMappingURL=SkyWarsMini.js.map