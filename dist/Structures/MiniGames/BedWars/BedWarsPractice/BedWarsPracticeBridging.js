import BedWarsPracticeBridgingRecords from './BedWarsPracticeBridgingRecords/BedWarsPracticeBridgingRecords.js';
import BedWarsPracticeMode from './BedWarsPracticeMode.js';
class BedWarsPracticeBridging extends BedWarsPracticeMode {
    records;
    constructor(data, records) {
        super(data);
        this.records = new BedWarsPracticeBridgingRecords(records);
    }
}
export default BedWarsPracticeBridging;
//# sourceMappingURL=BedWarsPracticeBridging.js.map