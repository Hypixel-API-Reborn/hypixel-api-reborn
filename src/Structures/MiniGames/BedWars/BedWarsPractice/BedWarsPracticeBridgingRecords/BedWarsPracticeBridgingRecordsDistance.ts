import BedWarsPracticeBridgingRecordsElevation from './BedWarsPracticeBridgingRecordsElevation.js';
import type { BedWarsPracticeBridgingRecordsDistanceId } from '../../../../../Types/Player.js';

class BedWarsPracticeBridgingRecordsDistance {
  none: BedWarsPracticeBridgingRecordsElevation;
  slight: BedWarsPracticeBridgingRecordsElevation;
  staircase: BedWarsPracticeBridgingRecordsElevation;
  constructor(data: Record<string, any>, distance: BedWarsPracticeBridgingRecordsDistanceId) {
    this.none = new BedWarsPracticeBridgingRecordsElevation(data, distance, 'NONE');
    this.slight = new BedWarsPracticeBridgingRecordsElevation(data, distance, 'SLIGHT');
    this.staircase = new BedWarsPracticeBridgingRecordsElevation(data, distance, 'STAIRCASE');
  }
}

export default BedWarsPracticeBridgingRecordsDistance;
