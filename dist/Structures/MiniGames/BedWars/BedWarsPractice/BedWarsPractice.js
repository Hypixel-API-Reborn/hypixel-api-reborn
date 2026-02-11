import BedWarsPracticeBridging from './BedWarsPracticeBridging.js';
import BedWarsPracticeMode from './BedWarsPracticeMode.js';
class BedWarsPractice {
    bridging;
    fireballJumping;
    mlg;
    pearlClutching;
    selected;
    constructor(data) {
        this.bridging = new BedWarsPracticeBridging(data?.bridging || {}, data?.records || {});
        this.fireballJumping = new BedWarsPracticeMode(data?.fireball_jumping || {});
        this.mlg = new BedWarsPracticeMode(data?.mlg || {});
        this.pearlClutching = new BedWarsPracticeMode(data?.pearl_clutching || {});
        this.selected = data?.selected || 'UNKNOWN';
    }
}
export default BedWarsPractice;
//# sourceMappingURL=BedWarsPractice.js.map