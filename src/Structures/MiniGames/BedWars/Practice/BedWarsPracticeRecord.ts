import BedWarsPracticeRecordElevation from './BedWarsPracticeRecordElevation.js';

class BedWarsPracticeRecord {
  elevationNone: BedWarsPracticeRecordElevation;
  elevationSlight: BedWarsPracticeRecordElevation;
  elevationStaircase: BedWarsPracticeRecordElevation;
  constructor(data: Record<string, any>, distance: 30 | 50 | 100) {
    this.elevationNone = new BedWarsPracticeRecordElevation(data, distance, 'NONE');
    this.elevationSlight = new BedWarsPracticeRecordElevation(data, distance, 'SLIGHT');
    this.elevationStaircase = new BedWarsPracticeRecordElevation(data, distance, 'STAIRCASE');
  }
}

export default BedWarsPracticeRecord;
