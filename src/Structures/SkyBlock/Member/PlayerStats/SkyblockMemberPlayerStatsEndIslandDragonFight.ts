// eslint-disable-next-line max-len
import SkyblockMemberPlayerStatsEndIslandDragonFightDragon from './SkyblockMemberPlayerStatsEndIslandDragonFightDragon.js';

class SkyblockMemberPlayerStatsEndIslandDragonFight {
  enderCrystalsDestroyed: number;
  protector: SkyblockMemberPlayerStatsEndIslandDragonFightDragon;
  old: SkyblockMemberPlayerStatsEndIslandDragonFightDragon;
  unstable: SkyblockMemberPlayerStatsEndIslandDragonFightDragon;
  young: SkyblockMemberPlayerStatsEndIslandDragonFightDragon;
  strong: SkyblockMemberPlayerStatsEndIslandDragonFightDragon;
  wise: SkyblockMemberPlayerStatsEndIslandDragonFightDragon;
  superior: SkyblockMemberPlayerStatsEndIslandDragonFightDragon;
  constructor(data: Record<string, any>) {
    this.enderCrystalsDestroyed = data?.ender_crystals_destroyed || 0;
    this.protector = new SkyblockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'protector');
    this.old = new SkyblockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'old');
    this.unstable = new SkyblockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'unstable');
    this.young = new SkyblockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'young');
    this.strong = new SkyblockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'strong');
    this.wise = new SkyblockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'wise');
    this.superior = new SkyblockMemberPlayerStatsEndIslandDragonFightDragon(data || {}, 'superior');
  }
}

export default SkyblockMemberPlayerStatsEndIslandDragonFight;
