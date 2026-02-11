import SkyBlockMemberInventoriesBackpackDecoded from './SkyBlockMemberInventoriesBackpackDecoded.js';
declare class SkyBlockMemberInventoriesBackpack {
    backpackItemBase64: string;
    backpackContentsBase64: string;
    constructor(data: Record<string, any>, slot: string);
    decodeData(): Promise<SkyBlockMemberInventoriesBackpackDecoded | null>;
}
export default SkyBlockMemberInventoriesBackpack;
//# sourceMappingURL=SkyBlockMemberInventoriesBackpack.d.ts.map