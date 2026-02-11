import BedWarsMode from './BedWarsMode.js';
class BedWarsEightTwo extends BedWarsMode {
    tourney1;
    tourney0;
    tourney;
    armed;
    lucky;
    rush;
    swap;
    ultimate;
    underworld;
    voidless;
    constructor(data) {
        super(data, 'eight_two');
        this.tourney1 = new BedWarsMode(data, 'tourney_bedwars_eight_two_1');
        this.tourney0 = new BedWarsMode(data, 'tourney_bedwars_eight_two_0');
        this.tourney = new BedWarsMode(data, 'eight_two_tourney');
        this.armed = new BedWarsMode(data, 'eight_two_armed');
        this.lucky = new BedWarsMode(data, 'eight_two_lucky');
        this.rush = new BedWarsMode(data, 'eight_two_rush');
        this.swap = new BedWarsMode(data, 'eight_two_swap');
        this.ultimate = new BedWarsMode(data, 'eight_two_ultimate');
        this.underworld = new BedWarsMode(data, 'eight_two_underworld');
        this.voidless = new BedWarsMode(data, 'eight_two_voidless');
    }
}
export default BedWarsEightTwo;
//# sourceMappingURL=BedWarsEightTwo.js.map