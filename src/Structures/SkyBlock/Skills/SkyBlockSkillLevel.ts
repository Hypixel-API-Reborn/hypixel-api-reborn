class SkyBlockSkillLevel {
  level: number;
  totalExpRequired: number;
  unlocks: string[];
  constructor(data: Record<string, any>) {
    this.level = data?.level || 0;
    this.totalExpRequired = data?.totalExpRequired || 0;
    this.unlocks = data?.unlocks || [];
  }

  toString(): number {
    return this.level;
  }
}

export default SkyBlockSkillLevel;
