import SkyblockSkill from './SkyblockSkill.js';

class SkyblockSkills {
  lastUpdated: number;
  lastUpdatedAt: Date;
  version: string;
  farming: SkyblockSkill;
  mining: SkyblockSkill;
  combat: SkyblockSkill;
  foraging: SkyblockSkill;
  fishing: SkyblockSkill;
  enchanting: SkyblockSkill;
  alchemy: SkyblockSkill;
  carpentry: SkyblockSkill;
  runecrafting: SkyblockSkill;
  social: SkyblockSkill;
  taming: SkyblockSkill;
  constructor(data: Record<string, any>) {
    this.lastUpdated = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdated);
    this.version = data?.version || 'UNKNOWN';
    this.farming = new SkyblockSkill(data?.skills?.FARMING || {});
    this.mining = new SkyblockSkill(data?.skills?.MINING || {});
    this.combat = new SkyblockSkill(data?.skills?.COMBAT || {});
    this.foraging = new SkyblockSkill(data?.skills?.FORAGING || {});
    this.fishing = new SkyblockSkill(data?.skills?.FISHING || {});
    this.enchanting = new SkyblockSkill(data?.skills?.ENCHANTING || {});
    this.alchemy = new SkyblockSkill(data?.skills?.ALCHEMY || {});
    this.carpentry = new SkyblockSkill(data?.skills?.CARPENTRY || {});
    this.runecrafting = new SkyblockSkill(data?.skills?.RUNECRAFTING || {});
    this.social = new SkyblockSkill(data?.skills?.SOCIAL || {});
    this.taming = new SkyblockSkill(data?.skills?.TAMING || {});
  }
}

export default SkyblockSkills;
