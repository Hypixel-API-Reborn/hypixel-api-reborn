import SkyBlockMemberPlayerDataActiveEffect from './SkyBlockMemberPlayerDataActiveEffect.js';
import SkyBlockMemberPlayerDataMinions from './SkyBlockMemberPlayerDataMinions.js';
import SkyBlockMemberPlayerDataSkills from './SkyBlockMemberPlayerDataSkills.js';
import type { SkyBlockArea, SkyBlockPotionEffectName } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberPlayerData {
  activeEffects: SkyBlockMemberPlayerDataActiveEffect[];
  pausedEffects: SkyBlockPotionEffectName[];
  disabledPotionEffects: SkyBlockPotionEffectName[];
  reaperPeppersEaten: number;
  deaths: number;
  lastDeath: number;
  visitedZones: string[];
  visitedModes: SkyBlockArea[];
  achievementSpawnedIslandTypes: string[];
  unlockedCollTiers: string[];
  perks: Record<string, number>;
  minions: SkyBlockMemberPlayerDataMinions;
  fastestTargetPractice: number;
  fishingTreasureCaught: number;
  skills: SkyBlockMemberPlayerDataSkills;
  constructor(data: Record<string, any>, skillCaps: { farmingCap: number; tamingCap: number }) {
    this.activeEffects = (data?.active_effects || []).map(
      (effect: Record<string, any>) => new SkyBlockMemberPlayerDataActiveEffect(effect)
    );
    this.pausedEffects = data?.paused_effects || [];
    this.disabledPotionEffects = data?.disabled_potion_effects || [];
    this.reaperPeppersEaten = data?.reaper_peppers_eaten || 0;
    this.deaths = data?.death_count || 0;
    this.lastDeath = data?.last_death || 0;
    this.visitedZones = data?.visited_zones || [];
    this.visitedModes = data?.visited_modes || [];
    this.achievementSpawnedIslandTypes = data?.achievement_spawned_island_types || [];
    this.unlockedCollTiers = data?.unlocked_coll_tiers || [];
    this.perks = data?.perks || {};
    this.minions = new SkyBlockMemberPlayerDataMinions(data?.crafted_generators || {});
    this.fastestTargetPractice = data?.fastest_target_practice || 0;
    this.fishingTreasureCaught = data?.fishing_treasure_caught || 0;
    this.skills = new SkyBlockMemberPlayerDataSkills(data?.experience || {}, skillCaps);
  }
}

export default SkyBlockMemberPlayerData;
