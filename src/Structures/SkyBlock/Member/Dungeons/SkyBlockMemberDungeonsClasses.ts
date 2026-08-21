import { CalculateAverage, getLevelByXp } from '../../../../Utils/index.js';
import type { DungeonClass, SkillLevelData } from '../../../../Types/index.js';

class SkyBlockMemberDungeonsClasses {
  selected: DungeonClass | 'UNKNOWN';
  healer: SkillLevelData;
  berserk: SkillLevelData;
  mage: SkillLevelData;
  archer: SkillLevelData;
  tank: SkillLevelData;
  constructor(data: Record<string, any>) {
    this.selected = data?.selected_dungeon_class ?? 'UNKNOWN';
    this.healer = getLevelByXp(data?.player_classes?.healer?.experience ?? 0, { type: 'dungeoneering' });
    this.berserk = getLevelByXp(data?.player_classes?.berserk?.experience ?? 0, { type: 'dungeoneering' });
    this.mage = getLevelByXp(data?.player_classes?.mage?.experience ?? 0, { type: 'dungeoneering' });
    this.archer = getLevelByXp(data?.player_classes?.archer?.experience ?? 0, { type: 'dungeoneering' });
    this.tank = getLevelByXp(data?.player_classes?.tank?.experience ?? 0, { type: 'dungeoneering' });
  }

  get average(): number {
    return CalculateAverage([this.healer, this.berserk, this.mage, this.archer, this.tank].map((c) => c.level));
  }

  toString(): DungeonClass | 'UNKNOWN' {
    return this.selected;
  }
}

export default SkyBlockMemberDungeonsClasses;
