class SkyBlockMemeberMiningCrystal {
  found: boolean;
  totalFound: number;
  totalPlaced: number;
  constructor(data: Record<string, any>) {
    this.found = data.state ? 'FOUND' === data.state : false;
    this.totalFound = data?.total_found || 0;
    this.totalPlaced = data?.total_placed || 0;
  }

  toString(): boolean {
    return this.found;
  }
}

export default SkyBlockMemeberMiningCrystal;
