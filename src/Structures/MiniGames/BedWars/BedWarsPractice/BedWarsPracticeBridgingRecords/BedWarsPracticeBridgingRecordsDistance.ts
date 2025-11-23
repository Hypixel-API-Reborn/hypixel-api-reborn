import BedWarsPracticeBridgingRecordsEevation from './BedWarsPracticeBridgingRecordsEevation.js';
import type { BedWarsPracticeBridgingRecordsDistances } from '../../../../../Types/Player.js';

class BedWarsPracticeBridgingRecordsDistance {
  none: BedWarsPracticeBridgingRecordsEevation;
  slight: BedWarsPracticeBridgingRecordsEevation;
  staircase: BedWarsPracticeBridgingRecordsEevation;
  constructor(data: Record<string, any>, distance: BedWarsPracticeBridgingRecordsDistances) {
    this.none = new BedWarsPracticeBridgingRecordsEevation(data, distance, 'NONE');
    this.slight = new BedWarsPracticeBridgingRecordsEevation(data, distance, 'SLIGHT');
    this.staircase = new BedWarsPracticeBridgingRecordsEevation(data, distance, 'STAIRCASE');
  }
}

export default BedWarsPracticeBridgingRecordsDistance;
