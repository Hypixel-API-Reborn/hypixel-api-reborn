class SkyBlockMemberInventoriesBaseInventory {
  base64: string | null;
  constructor(data: Record<string, any>) {
    this.base64 = data?.data || null;
  }

  decodeData(): Promise<any> | any {
    throw new Error("Something went wrong. You shouldn't be seeing this");
  }
}

export default SkyBlockMemberInventoriesBaseInventory;
