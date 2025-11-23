import BedWarsMode from './BedWarsMode.js';

class BedWarsFourFour extends BedWarsMode {
  tourney1: BedWarsMode;
  tourney0: BedWarsMode;
  tourney: BedWarsMode;
  armed: BedWarsMode;
  lucky: BedWarsMode;
  rush: BedWarsMode;
  swap: BedWarsMode;
  ultimate: BedWarsMode;
  underworld: BedWarsMode;
  voidless: BedWarsMode;
  constructor(data: Record<string, any>) {
    super(data, 'four_four');
    this.tourney1 = new BedWarsMode(data, 'tourney_bedwars4s_1');
    this.tourney0 = new BedWarsMode(data, 'tourney_bedwars4s_0');
    this.tourney = new BedWarsMode(data, 'tourney_bedwars4s');
    this.armed = new BedWarsMode(data, 'four_four_armed');
    this.lucky = new BedWarsMode(data, 'four_four_lucky');
    this.rush = new BedWarsMode(data, 'four_four_rush');
    this.swap = new BedWarsMode(data, 'four_four_swap');
    this.ultimate = new BedWarsMode(data, 'four_four_ultimate');
    this.underworld = new BedWarsMode(data, 'four_four_underworld');
    this.voidless = new BedWarsMode(data, 'four_four_voidless');
  }
}

export default BedWarsFourFour;
