// eslint-disable-next-line @stylistic/max-len
import SkyBlockMemberPlayerStatsEndIslandDragonFightDragon from './SkyBlockMemberPlayerStatsEndIslandDragonFightDragon.js';

class SkyBlockMemberPlayerStatsEndIslandDragonFight {
  enderCrystalsDestroyed: number;
  protector: SkyBlockMemberPlayerStatsEndIslandDragonFightDragon;
  old: SkyBlockMemberPlayerStatsEndIslandDragonFightDragon;
  unstable: SkyBlockMemberPlayerStatsEndIslandDragonFightDragon;
  young: SkyBlockMemberPlayerStatsEndIslandDragonFightDragon;
  strong: SkyBlockMemberPlayerStatsEndIslandDragonFightDragon;
  wise: SkyBlockMemberPlayerStatsEndIslandDragonFightDragon;
  superior: SkyBlockMemberPlayerStatsEndIslandDragonFightDragon;
  constructor(data: Record<string, any>) {
    this.enderCrystalsDestroyed = data?.ender_crystals_destroyed || 0;
    this.protector = new SkyBlockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'protector');
    this.old = new SkyBlockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'old');
    this.unstable = new SkyBlockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'unstable');
    this.young = new SkyBlockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'young');
    this.strong = new SkyBlockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'strong');
    this.wise = new SkyBlockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'wise');
    this.superior = new SkyBlockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'superior');
  }
}

export default SkyBlockMemberPlayerStatsEndIslandDragonFight;
