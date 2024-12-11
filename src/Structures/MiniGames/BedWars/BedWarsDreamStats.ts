import BedwarsDreamMode from './BedWarsDreamMode.js';

class BedWarsDreamStats {
  ultimate: BedwarsDreamMode;
  rush: BedwarsDreamMode;
  armed: BedwarsDreamMode;
  lucky: BedwarsDreamMode;
  voidless: BedwarsDreamMode;
  constructor(data: Record<string, any>) {
    this.ultimate = new BedwarsDreamMode(data, 'ultimate');
    this.rush = new BedwarsDreamMode(data, 'rush');
    this.armed = new BedwarsDreamMode(data, 'armed');
    this.lucky = new BedwarsDreamMode(data, 'lucky');
    this.voidless = new BedwarsDreamMode(data, 'voidless');
  }
}

export default BedWarsDreamStats;
