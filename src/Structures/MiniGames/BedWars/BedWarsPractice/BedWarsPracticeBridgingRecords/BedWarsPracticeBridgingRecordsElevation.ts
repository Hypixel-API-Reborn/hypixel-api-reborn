import type {
  BedWarsPracticeBridgingRecordsDistanceId,
  BedWarsPracticeBridgingRecordsElevation as BedWarsPracticeBridgingRecordsElevations
} from '../../../../../Types/Player.js';

class BedWarsPracticeBridgingRecordsElevation {
  diagonal: number;
  straight: number;
  constructor(
    data: Record<string, any>,
    distance: BedWarsPracticeBridgingRecordsDistanceId,
    elevation: BedWarsPracticeBridgingRecordsElevations
  ) {
    this.diagonal = data?.[`bridging_distance_${distance}:elevation_${elevation}:angle_DIAGONAL`] ?? 0;
    this.straight = data?.[`bridging_distance_${distance}:elevation_${elevation}:angle_STRAIGHT`] ?? 0;
  }
}

export default BedWarsPracticeBridgingRecordsElevation;
