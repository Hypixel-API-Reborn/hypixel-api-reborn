import Divide from '../../../../Utils/Divide.js';
class BedWarsPracticeMode {
    blocksPlaced;
    successfulAttempts;
    failedAttempts;
    attempts;
    successfulRatio;
    constructor(data) {
        this.blocksPlaced = data?.blocks_placed || 0;
        this.successfulAttempts = data?.successful_attempts || 0;
        this.failedAttempts = data?.failed_attempts || 0;
        this.attempts = this.successfulAttempts + this.failedAttempts;
        this.successfulRatio = Divide(this.successfulAttempts, this.failedAttempts);
    }
}
export default BedWarsPracticeMode;
//# sourceMappingURL=BedWarsPracticeMode.js.map