import BedWarsPracticeRecord from './BedWarsPracticeRecord.js';

class BedWarsPracticeBridgingRecords {
  blocks30: BedWarsPracticeRecord;
  blocks50: BedWarsPracticeRecord;
  blocks100: BedWarsPracticeRecord;
  constructor(data: Record<string, any>) {
    this.blocks30 = new BedWarsPracticeRecord(data, 30);
    this.blocks50 = new BedWarsPracticeRecord(data, 50);
    this.blocks100 = new BedWarsPracticeRecord(data, 100);
  }
}

export default BedWarsPracticeBridgingRecords;
