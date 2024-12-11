import BedWarsPracticeBaseBlocksPlaced from './BedWarsPracticeBaseBlocksPlaced.js';
import BedWarsPracticeBridgingRecords from './BedWarsPracticeBridgingRecords.js';

class BedWarsPracticeBridging extends BedWarsPracticeBaseBlocksPlaced {
  records: BedWarsPracticeBridgingRecords;
  constructor(data: Record<string, any>, records: Record<string, any>) {
    super(data);
    this.records = new BedWarsPracticeBridgingRecords(records);
  }
}

export default BedWarsPracticeBridging;
