import BedWarsPracticeBridgingRecords from './BedWarsPracticeBridgingRecords/BedWarsPracticeBridgingRecords.ts';
import BedWarsPracticeMode from './BedWarsPracticeMode.ts';

class BedWarsPracticeBridging extends BedWarsPracticeMode {
  records: BedWarsPracticeBridgingRecords;
  constructor(data: Record<string, any>, records: Record<string, any>) {
    super(data);
    this.records = new BedWarsPracticeBridgingRecords(records);
  }
}

export default BedWarsPracticeBridging;
