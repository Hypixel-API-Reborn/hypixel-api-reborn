import SkyBlockMemberMiningCrystal from './SkyBlockMemberMiningCrystal.js';
import SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.js';
import SkyBlockMemberMiningPowders from './SkyBlockMemberMiningPowders.js';
class SkyBlockMemberMining {
    powder;
    crystals;
    hotm;
    pickaxeAbility;
    dailyEffect;
    constructor(data) {
        this.powder = new SkyBlockMemberMiningPowders(data || {});
        this.crystals = Object.keys(data?.crystals || {}).reduce((obj, key) => {
            obj[key.split('_crystal')[0] || 'jade'] = new SkyBlockMemberMiningCrystal(data?.crystals?.[key]);
            return obj;
        }, {});
        this.hotm = new SkyBlockMemberMiningHotm(data || {});
        this.pickaxeAbility = data?.selected_pickaxe_ability || 'UNKNOWN';
        this.dailyEffect = data?.current_daily_effect || 'UNKNOWN';
    }
}
export default SkyBlockMemberMining;
//# sourceMappingURL=SkyBlockMemberMining.js.map