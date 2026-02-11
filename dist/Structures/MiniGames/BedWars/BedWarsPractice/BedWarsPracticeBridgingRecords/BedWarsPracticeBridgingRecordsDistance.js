import BedWarsPracticeBridgingRecordsEevation from './BedWarsPracticeBridgingRecordsEevation.js';
class BedWarsPracticeBridgingRecordsDistance {
    none;
    slight;
    staircase;
    constructor(data, distance) {
        this.none = new BedWarsPracticeBridgingRecordsEevation(data, distance, 'NONE');
        this.slight = new BedWarsPracticeBridgingRecordsEevation(data, distance, 'SLIGHT');
        this.staircase = new BedWarsPracticeBridgingRecordsEevation(data, distance, 'STAIRCASE');
    }
}
export default BedWarsPracticeBridgingRecordsDistance;
//# sourceMappingURL=BedWarsPracticeBridgingRecordsDistance.js.map