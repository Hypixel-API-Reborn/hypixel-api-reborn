class SkyblockMemberSlayerClaimedLevels {
  level1: boolean;
  level2: boolean;
  level3: boolean;
  level4: boolean;
  level5: boolean;
  level6: boolean;
  level7: boolean;
  level8: boolean;
  level9: boolean;
  constructor(data: Record<string, any>) {
    this.level1 = data?.level_1 ?? data?.level_1_special ?? false;
    this.level2 = data?.level_2 ?? data?.level_2_special ?? false;
    this.level3 = data?.level_3 ?? data?.level_3_special ?? false;
    this.level4 = data?.level_4 ?? data?.level_4_special ?? false;
    this.level5 = data?.level_5 ?? data?.level_5_special ?? false;
    this.level6 = data?.level_6 ?? data?.level_6_special ?? false;
    this.level7 = data?.level_7 ?? data?.level_7_special ?? false;
    this.level8 = data?.level_8 ?? data?.level_8_special ?? false;
    this.level9 = data?.level_9 ?? data?.level_9_special ?? false;
  }
}

export default SkyblockMemberSlayerClaimedLevels;
