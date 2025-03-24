import { getLevelByXp } from '../../../../Utils/SkyblockUtils.js';
import type { SkillLevelData } from '../../../../Types/Skyblock.js';

class SkyblockMemberPlayerDataSkills {
  fishing: SkillLevelData;
  alchemy: SkillLevelData;
  runecrafting: SkillLevelData;
  mining: SkillLevelData;
  farming: SkillLevelData;
  enchanting: SkillLevelData;
  taming: SkillLevelData;
  foraging: SkillLevelData;
  social: SkillLevelData;
  carpentry: SkillLevelData;
  combat: SkillLevelData;
  constructor(data: Record<string, any>, skillCaps: { farmingCap: number; tamingCap: number }) {
    this.fishing = getLevelByXp(data?.SKILL_FISHING || 0, { type: 'fishing' });
    this.alchemy = getLevelByXp(data?.SKILL_ALCHEMY || 0, { type: 'alchemy' });
    this.runecrafting = getLevelByXp(data?.SKILL_RUNECRAFTING || 0, { type: 'runecrafting' });
    this.mining = getLevelByXp(data?.SKILL_MINING || 0, { type: 'mining' });
    this.farming = getLevelByXp(data?.SKILL_FARMING || 0, { type: 'farming', cap: 50 + skillCaps.farmingCap });
    this.enchanting = getLevelByXp(data?.SKILL_ENCHANTING || 0, { type: 'enchanting' });
    this.taming = getLevelByXp(data?.SKILL_TAMING || 0, { type: 'taming', cap: 50 + skillCaps.tamingCap });
    this.foraging = getLevelByXp(data?.SKILL_FORAGING || 0, { type: 'foraging' });
    this.social = getLevelByXp(data?.SKILL_SOCIAL || 0, { type: 'social' });
    this.carpentry = getLevelByXp(data?.SKILL_CARPENTRY || 0, { type: 'carpentry' });
    this.combat = getLevelByXp(data?.SKILL_COMBAT || 0, { type: 'combat' });
  }
}

export default SkyblockMemberPlayerDataSkills;
