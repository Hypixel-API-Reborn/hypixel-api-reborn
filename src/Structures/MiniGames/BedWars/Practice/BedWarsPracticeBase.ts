import BedWarsPracticeModeAttempts from './BedWarsPracticeModeAttempts.js';

class BedWarsPracticeBase {
  attempts: BedWarsPracticeModeAttempts;
  constructor(data: Record<string, any>) {
    this.attempts = new BedWarsPracticeModeAttempts(data);
  }
}

export default BedWarsPracticeBase;
