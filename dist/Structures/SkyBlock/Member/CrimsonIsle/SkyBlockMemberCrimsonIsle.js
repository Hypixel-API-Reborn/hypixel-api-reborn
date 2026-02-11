/* eslint-disable @stylistic/max-len */
import SkyBlockMemberCrimsonIsleAbiphone from './SkyBlockMemberCrimsonIsleAbiphone.js';
import SkyBlockMemberCrimsonIsleDojo from './SkyBlockMemberCrimsonIsleDojo.js';
import SkyBlockMemberCrimsonIsleKuudra from './SkyBlockMemberCrimsonIsleKuudra.js';
import SkyBlockMemberCrimsonIsleMatriarch from './SkyBlockMemberCrimsonIsleMatriarch.js';
import SkyBlockMemberCrimsonIsleTrophyFish from './SkyBlockMemberCrimsonIsleTrophyFish/SkyBlockMemberCrimsonIsleTrophyFish.js';
/* eslint-enable @stylistic/max-len */
class SkyBlockMemberCrimsonIsle {
    dojo;
    kuudra;
    matriarch;
    abiphone;
    faction;
    magesReputation;
    barbariansReputation;
    lastMiniBossesKilled;
    trophyFishing;
    constructor(data, trophyFish) {
        this.dojo = new SkyBlockMemberCrimsonIsleDojo(data?.dojo || {});
        this.kuudra = new SkyBlockMemberCrimsonIsleKuudra(data?.kuudra_completed_tiers || {}, data?.kuudra_party_finder || {});
        this.matriarch = new SkyBlockMemberCrimsonIsleMatriarch(data?.matriarch || {});
        this.abiphone = new SkyBlockMemberCrimsonIsleAbiphone(data?.abiphone || {});
        this.faction = data?.selected_faction || 'UNKNOWN';
        this.magesReputation = data?.mages_reputation || 0;
        this.barbariansReputation = data?.barbarians_reputation || 0;
        this.lastMiniBossesKilled = data?.last_minibosses_killed || [];
        this.trophyFishing = new SkyBlockMemberCrimsonIsleTrophyFish(trophyFish);
    }
    toString() {
        return this.faction;
    }
}
export default SkyBlockMemberCrimsonIsle;
//# sourceMappingURL=SkyBlockMemberCrimsonIsle.js.map