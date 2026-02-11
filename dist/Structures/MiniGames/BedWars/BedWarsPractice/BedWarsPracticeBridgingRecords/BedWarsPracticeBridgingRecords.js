import BedWarsPracticeBridgingRecordsDistance from './BedWarsPracticeBridgingRecordsDistance.js';
class BedWarsPracticeBridgingRecords {
    blocks100;
    blocks50;
    blocks30;
    constructor(data) {
        this.blocks100 = new BedWarsPracticeBridgingRecordsDistance(data, '100');
        this.blocks50 = new BedWarsPracticeBridgingRecordsDistance(data, '50');
        this.blocks30 = new BedWarsPracticeBridgingRecordsDistance(data, '30');
    }
}
export default BedWarsPracticeBridgingRecords;
//# sourceMappingURL=BedWarsPracticeBridgingRecords.js.map