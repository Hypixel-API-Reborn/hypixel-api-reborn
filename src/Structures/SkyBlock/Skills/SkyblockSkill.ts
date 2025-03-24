import SkyblockSkillLevel from './SkyblockSkillLevel.js';

class SkyblockSkill {
  name: string;
  description: string;
  maxLevel: number;
  levels: SkyblockSkillLevel[];
  constructor(data: Record<string, any>) {
    this.name = data?.name || 'UNKNOWN';
    this.description = data?.description || 'UNKNOWN';
    this.maxLevel = data?.maxLevel || 0;
    this.levels = (data?.levels || []).forEach((level: Record<string, any>) => new SkyblockSkillLevel(level));
  }
}

export default SkyblockSkill;
