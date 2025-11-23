import Divide from '../../../../Utils/Divide.js';

class BedWarsPracticeMode {
  blocksPlaced: number;
  successfulAttempts: number;
  failedAttempts: number;
  attempts: number;
  successfulRatio: number;
  constructor(data: Record<string, any>) {
    this.blocksPlaced = data?.blocks_placed || 0;
    this.successfulAttempts = data?.successful_attempts || 0;
    this.failedAttempts = data?.failed_attempts || 0;
    this.attempts = this.successfulAttempts + this.failedAttempts;
    this.successfulRatio = Divide(this.successfulAttempts, this.failedAttempts);
  }
}

export default BedWarsPracticeMode;
