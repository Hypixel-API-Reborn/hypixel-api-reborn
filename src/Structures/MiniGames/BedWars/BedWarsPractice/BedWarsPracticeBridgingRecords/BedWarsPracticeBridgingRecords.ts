import BedWarsPracticeBridgingRecordsDistance from './BedWarsPracticeBridgingRecordsDistance.js';

class BedWarsPracticeBridgingRecords {
  blocks100: BedWarsPracticeBridgingRecordsDistance;
  blocks50: BedWarsPracticeBridgingRecordsDistance;
  blocks30: BedWarsPracticeBridgingRecordsDistance;
  constructor(data: Record<string, any>) {
    this.blocks100 = new BedWarsPracticeBridgingRecordsDistance(data, '100');
    this.blocks50 = new BedWarsPracticeBridgingRecordsDistance(data, '50');
    this.blocks30 = new BedWarsPracticeBridgingRecordsDistance(data, '30');
  }
}

export default BedWarsPracticeBridgingRecords;
