import BedWarsDreamMode from './BedWarsDreamMode.js';

class BedWarsDreamStats {
  ultimate: BedWarsDreamMode;
  rush: BedWarsDreamMode;
  armed: BedWarsDreamMode;
  lucky: BedWarsDreamMode;
  voidless: BedWarsDreamMode;
  constructor(data: Record<string, any>) {
    this.ultimate = new BedWarsDreamMode(data, 'ultimate');
    this.rush = new BedWarsDreamMode(data, 'rush');
    this.armed = new BedWarsDreamMode(data, 'armed');
    this.lucky = new BedWarsDreamMode(data, 'lucky');
    this.voidless = new BedWarsDreamMode(data, 'voidless');
  }
}

export default BedWarsDreamStats;
