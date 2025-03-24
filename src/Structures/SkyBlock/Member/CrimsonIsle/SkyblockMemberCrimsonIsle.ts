import SkyblockMemberCrimsonIsleAbiphone from './SkyblockMemberCrimsonIsleAbiphone.js';
import SkyblockMemberCrimsonIsleDojo from './SkyblockMemberCrimsonIsleDojo.js';
import SkyblockMemberCrimsonIsleKuudra from './SkyblockMemberCrimsonIsleKuudra.js';
import SkyblockMemberCrimsonIsleMatriarch from './SkyblockMemberCrimsonIsleMatriarch.js';
import SkyblockMemberCrimsonIsleTrophyFish from './SkyblockMemberCrimsonIsleTrophyFish.js';
import type { CrimsonIsleBoss, CrimsonIsleFaction } from '../../../../Types/Skyblock.js';

class SkyblockMemberCrimsonIsle {
  dojo: SkyblockMemberCrimsonIsleDojo;
  kuudra: SkyblockMemberCrimsonIsleKuudra;
  matriarch: SkyblockMemberCrimsonIsleMatriarch;
  abiphone: SkyblockMemberCrimsonIsleAbiphone;
  faction: CrimsonIsleFaction | 'UNKNOWN';
  magesReputation: number;
  barbariansReputation: number;
  lastMiniBossesKilled: CrimsonIsleBoss[];
  trophyFishing: SkyblockMemberCrimsonIsleTrophyFish;
  constructor(data: Record<string, any>, trophyFish: Record<string, any>) {
    this.dojo = new SkyblockMemberCrimsonIsleDojo(data?.dojo || {});
    this.kuudra = new SkyblockMemberCrimsonIsleKuudra(
      data?.kuudra_completed_tiers || {},
      data?.kuudra_party_finder || {}
    );
    this.matriarch = new SkyblockMemberCrimsonIsleMatriarch(data?.matriarch || {});
    this.abiphone = new SkyblockMemberCrimsonIsleAbiphone(data?.abiphone || {});
    this.faction = data?.selected_faction || 'UNKNOWN';
    this.magesReputation = data?.mages_reputation || 0;
    this.barbariansReputation = data?.barbarians_reputation || 0;
    this.lastMiniBossesKilled = data?.last_minibosses_killed || [];
    this.trophyFishing = new SkyblockMemberCrimsonIsleTrophyFish(trophyFish);
  }

  toString(): CrimsonIsleFaction | 'UNKNOWN' {
    return this.faction;
  }
}

export default SkyblockMemberCrimsonIsle;
