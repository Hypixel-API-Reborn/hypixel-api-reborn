import type {
  BedWarsPracticeBridgingRecordsDistanceId,
  BedWarsPracticeBridgingRecordsElevation
} from '../../../../../Types/Player.js';

class BedWarsPracticeBridgingRecordsEevation {
  diagonal: number;
  straight: number;
  constructor(
    data: Record<string, any>,
    distance: BedWarsPracticeBridgingRecordsDistanceId,
    elevation: BedWarsPracticeBridgingRecordsElevation
  ) {
    this.diagonal = data?.[`bridging_distance_${distance}:elevation_${elevation}:angle_DIAGONAL`] || 0;
    this.straight = data?.[`bridging_distance_${distance}:elevation_${elevation}:angle_STRAIGHT`] || 0;
  }
}

export default BedWarsPracticeBridgingRecordsEevation;
