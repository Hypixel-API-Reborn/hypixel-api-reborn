import BedWarsPracticeBase from './BedWarsPracticeBase.js';

class BedWarsPracticeBaseBlocksPlaced extends BedWarsPracticeBase {
  blocksPlaced: number;
  constructor(data: Record<string, any>) {
    super(data);
    this.blocksPlaced = data?.blocks_placed ?? 0;
  }
}

export default BedWarsPracticeBaseBlocksPlaced;
