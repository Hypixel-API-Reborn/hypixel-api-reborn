class SkyBlockMemberInventoriesBaseInventory {
    base64;
    constructor(data) {
        this.base64 = data?.data || null;
    }
    decodeData() {
        throw new Error("Something went wrong. You shouldn't be seeing this");
    }
}
export default SkyBlockMemberInventoriesBaseInventory;
//# sourceMappingURL=SkyBlockMemberInventoriesBaseInventory.js.map