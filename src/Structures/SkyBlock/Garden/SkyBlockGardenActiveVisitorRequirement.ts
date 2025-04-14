class SkyBlockGardenActiveVisitorRequirement {
  originalItem: string;
  originalAmount: number;
  item: string;
  amount: number;
  constructor(data: Record<string, any>) {
    this.originalItem = data?.original_item || '';
    this.originalAmount = data?.original_amount || 0;
    this.item = data?.item || '';
    this.amount = data?.amount || 0;
  }

  toString(): number {
    return this.amount;
  }
}

export default SkyBlockGardenActiveVisitorRequirement;
