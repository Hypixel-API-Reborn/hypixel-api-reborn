class BedWarsPracticeBridgingRecordsElevation {
    diagonal;
    straight;
    constructor(data, distance, elevation) {
        this.diagonal = data?.[`bridging_distance_${distance}:elevation_${elevation}:angle_DIAGONAL`] ?? 0;
        this.straight = data?.[`bridging_distance_${distance}:elevation_${elevation}:angle_STRAIGHT`] ?? 0;
    }
}
export default BedWarsPracticeBridgingRecordsElevation;
//# sourceMappingURL=BedWarsPracticeBridgingRecordsElevation.js.map