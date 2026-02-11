import SkyBlockMemberInventoriesBackpack from './SkyBlockMemberInventoriesBackpack.js';
class SkyBlockMemberInventoriesBackpacks {
    backpack1;
    backpack2;
    backpack3;
    backpack4;
    backpack5;
    backpack6;
    backpack7;
    backpack8;
    backpack9;
    backpack10;
    backpack11;
    backpack12;
    backpack13;
    backpack14;
    backpack15;
    backpack16;
    backpack17;
    backpack18;
    constructor(data) {
        this.backpack1 =
            data?.backpackIcons?.['0']?.data === undefined || data?.backpackContents?.['0']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '0');
        this.backpack2 =
            data?.backpackIcons?.['1']?.data === undefined || data?.backpackContents?.['1']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '1');
        this.backpack3 =
            data?.backpackIcons?.['2']?.data === undefined || data?.backpackContents?.['2']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '2');
        this.backpack4 =
            data?.backpackIcons?.['3']?.data === undefined || data?.backpackContents?.['3']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '3');
        this.backpack5 =
            data?.backpackIcons?.['4']?.data === undefined || data?.backpackContents?.['4']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '4');
        this.backpack6 =
            data?.backpackIcons?.['5']?.data === undefined || data?.backpackContents?.['5']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '5');
        this.backpack7 =
            data?.backpackIcons?.['6']?.data === undefined || data?.backpackContents?.['6']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '6');
        this.backpack8 =
            data?.backpackIcons?.['7']?.data === undefined || data?.backpackContents?.['7']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '7');
        this.backpack9 =
            data?.backpackIcons?.['8']?.data === undefined || data?.backpackContents?.['8']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '8');
        this.backpack10 =
            data?.backpackIcons?.['9']?.data === undefined || data?.backpackContents?.['9']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '9');
        this.backpack11 =
            data?.backpackIcons?.['10']?.data === undefined || data?.backpackContents?.['10']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '10');
        this.backpack12 =
            data?.backpackIcons?.['11']?.data === undefined || data?.backpackContents?.['11']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '11');
        this.backpack13 =
            data?.backpackIcons?.['12']?.data === undefined || data?.backpackContents?.['12']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '12');
        this.backpack14 =
            data?.backpackIcons?.['13']?.data === undefined || data?.backpackContents?.['13']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '13');
        this.backpack15 =
            data?.backpackIcons?.['14']?.data === undefined || data?.backpackContents?.['14']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '14');
        this.backpack16 =
            data?.backpackIcons?.['15']?.data === undefined || data?.backpackContents?.['15']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '15');
        this.backpack17 =
            data?.backpackIcons?.['16']?.data === undefined || data?.backpackContents?.['16']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '16');
        this.backpack18 =
            data?.backpackIcons?.['17']?.data === undefined || data?.backpackContents?.['17']?.data === undefined
                ? null
                : new SkyBlockMemberInventoriesBackpack(data, '17');
    }
}
export default SkyBlockMemberInventoriesBackpacks;
//# sourceMappingURL=SkyBlockMemberInventoriesBackpacks.js.map