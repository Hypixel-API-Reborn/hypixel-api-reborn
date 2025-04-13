import SkyBlockMemberInventoriesBackpack from './SkyBlockMemberInventoriesBackpack.js';

class SkyBlockMemberInventoriesBackpacks {
  backpack1: SkyBlockMemberInventoriesBackpack | null;
  backpack2: SkyBlockMemberInventoriesBackpack | null;
  backpack3: SkyBlockMemberInventoriesBackpack | null;
  backpack4: SkyBlockMemberInventoriesBackpack | null;
  backpack5: SkyBlockMemberInventoriesBackpack | null;
  backpack6: SkyBlockMemberInventoriesBackpack | null;
  backpack7: SkyBlockMemberInventoriesBackpack | null;
  backpack8: SkyBlockMemberInventoriesBackpack | null;
  backpack9: SkyBlockMemberInventoriesBackpack | null;
  backpack10: SkyBlockMemberInventoriesBackpack | null;
  backpack11: SkyBlockMemberInventoriesBackpack | null;
  backpack12: SkyBlockMemberInventoriesBackpack | null;
  backpack13: SkyBlockMemberInventoriesBackpack | null;
  backpack14: SkyBlockMemberInventoriesBackpack | null;
  backpack15: SkyBlockMemberInventoriesBackpack | null;
  backpack16: SkyBlockMemberInventoriesBackpack | null;
  backpack17: SkyBlockMemberInventoriesBackpack | null;
  backpack18: SkyBlockMemberInventoriesBackpack | null;
  constructor(data: Record<string, any>) {
    this.backpack1 =
      data?.backpackIcons?.['0']?.data === undefined || data?.backpackContents?.['0']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '0')
        : null;
    this.backpack2 =
      data?.backpackIcons?.['1']?.data === undefined || data?.backpackContents?.['1']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '1')
        : null;
    this.backpack3 =
      data?.backpackIcons?.['2']?.data === undefined || data?.backpackContents?.['2']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '2')
        : null;
    this.backpack4 =
      data?.backpackIcons?.['3']?.data === undefined || data?.backpackContents?.['3']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '3')
        : null;
    this.backpack5 =
      data?.backpackIcons?.['4']?.data === undefined || data?.backpackContents?.['4']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '4')
        : null;
    this.backpack6 =
      data?.backpackIcons?.['5']?.data === undefined || data?.backpackContents?.['5']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '5')
        : null;
    this.backpack7 =
      data?.backpackIcons?.['6']?.data === undefined || data?.backpackContents?.['6']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '6')
        : null;
    this.backpack8 =
      data?.backpackIcons?.['7']?.data === undefined || data?.backpackContents?.['7']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '7')
        : null;
    this.backpack9 =
      data?.backpackIcons?.['8']?.data === undefined || data?.backpackContents?.['8']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '8')
        : null;
    this.backpack10 =
      data?.backpackIcons?.['9']?.data === undefined || data?.backpackContents?.['9']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '9')
        : null;
    this.backpack11 =
      data?.backpackIcons?.['10']?.data === undefined || data?.backpackContents?.['10']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '10')
        : null;
    this.backpack12 =
      data?.backpackIcons?.['11']?.data === undefined || data?.backpackContents?.['11']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '11')
        : null;
    this.backpack13 =
      data?.backpackIcons?.['12']?.data === undefined || data?.backpackContents?.['12']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '12')
        : null;
    this.backpack14 =
      data?.backpackIcons?.['13']?.data === undefined || data?.backpackContents?.['13']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '13')
        : null;
    this.backpack15 =
      data?.backpackIcons?.['14']?.data === undefined || data?.backpackContents?.['14']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '14')
        : null;
    this.backpack16 =
      data?.backpackIcons?.['15']?.data === undefined || data?.backpackContents?.['15']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '15')
        : null;
    this.backpack17 =
      data?.backpackIcons?.['16']?.data === undefined || data?.backpackContents?.['16']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '16')
        : null;
    this.backpack18 =
      data?.backpackIcons?.['17']?.data === undefined || data?.backpackContents?.['17']?.data === undefined
        ? new SkyBlockMemberInventoriesBackpack(data, '17')
        : null;
  }
}

export default SkyBlockMemberInventoriesBackpacks;
