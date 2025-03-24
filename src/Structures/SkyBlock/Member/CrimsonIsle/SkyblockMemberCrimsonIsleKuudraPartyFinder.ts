import type { CrimsonIsleKuudraTier } from '../../../../Types/Skyblock.js';
import type { UserInput } from '../../../../Types/Global.js';

class SkyblockMemberCrimsonIsleKuudraPartyFinder {
  searchTier: CrimsonIsleKuudraTier | 'UNKNOWN';
  groupBuildTier: CrimsonIsleKuudraTier | 'UNKNOWN';
  groupBuildNote: UserInput | null;
  groupBuildRequiredCombatLevel: number | null;
  constructor(data: Record<string, any>) {
    this.searchTier = data?.search_settings?.tier || 'UNKNOWN';
    this.groupBuildTier = data?.group_builder?.tier || 'UNKNOWN';
    this.groupBuildNote = data?.group_builder?.note || null;
    this.groupBuildRequiredCombatLevel = data?.group_builder?.combat_level_required || null;
  }
}

export default SkyblockMemberCrimsonIsleKuudraPartyFinder;
