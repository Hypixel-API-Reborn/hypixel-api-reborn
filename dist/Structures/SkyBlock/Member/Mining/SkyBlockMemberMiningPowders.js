import SkyBlockMemberMiningPowder from './SkyBlockMemberMiningPowder.js';
class SkyBlockMemberMiningPowders {
    mithril;
    gemstone;
    glacite;
    constructor(data) {
        this.mithril = new SkyBlockMemberMiningPowder(data || {}, 'mithril');
        this.gemstone = new SkyBlockMemberMiningPowder(data || {}, 'gemstone');
        this.glacite = new SkyBlockMemberMiningPowder(data || {}, 'glacite');
    }
}
export default SkyBlockMemberMiningPowders;
//# sourceMappingURL=SkyBlockMemberMiningPowders.js.map