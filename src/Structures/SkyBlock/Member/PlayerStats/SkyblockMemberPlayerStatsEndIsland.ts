import SkyblockMemberPlayerStatsEndIslandDragonFight from './SkyblockMemberPlayerStatsEndIslandDragonFight.js';

class SkyblockMemberPlayerStatsEndIsland {
  dragonFight: SkyblockMemberPlayerStatsEndIslandDragonFight;
  summoningEyesCollected: number;
  specialZealotLootCollected: number;
  constructor(data: Record<string, any>) {
    this.dragonFight = new SkyblockMemberPlayerStatsEndIslandDragonFight(data?.dragon_fight || {});
    this.summoningEyesCollected = data?.summoning_eyes_collected || 0;
    this.specialZealotLootCollected = data?.special_zealot_loot_collected || 0;
  }
}

export default SkyblockMemberPlayerStatsEndIsland;
