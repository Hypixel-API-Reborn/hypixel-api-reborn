import SkyBlockSkillLevel from './SkyBlockSkillLevel.js';

class SkyBlockSkill {
  name: string;
  description: string;
  maxLevel: number;
  levels: SkyBlockSkillLevel[];
  constructor(data: Record<string, any>) {
    this.name = data?.name || 'UNKNOWN';
    this.description = data?.description || 'UNKNOWN';
    this.maxLevel = data?.maxLevel || 0;
    this.levels = (data?.levels || []).map((level: Record<string, any>) => new SkyBlockSkillLevel(level));
  }

  toString(): string {
    return this.name;
  }
}

export default SkyBlockSkill;
