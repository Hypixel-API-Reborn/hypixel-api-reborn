class SkyBlockMemberSlayerClaimedLevels {
    level1;
    level2;
    level3;
    level4;
    level5;
    level6;
    level7;
    level8;
    level9;
    constructor(data) {
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
export default SkyBlockMemberSlayerClaimedLevels;
//# sourceMappingURL=SkyBlockMemberSlayerClaimedLevels.js.map