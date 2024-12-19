import type { BedWarsPracticeRecordDistances, BedWarsPracticeRecordElevations } from '../../../../Types/Player.js';

class BedWarsPracticeRecordElevation {
  straight: number;
  diagonal: number;
  constructor(
    data: Record<string, any>,
    distance: BedWarsPracticeRecordDistances,
    elevation: BedWarsPracticeRecordElevations
  ) {
    this.straight = data?.[`bridging_distance_${distance}:elevation_${elevation}:angle_STRAIGHT:`] ?? 0;
    this.diagonal = data?.[`bridging_distance_${distance}:elevation_${elevation}:angle_DIAGONAL:`] ?? 0;
  }
}

export default BedWarsPracticeRecordElevation;
