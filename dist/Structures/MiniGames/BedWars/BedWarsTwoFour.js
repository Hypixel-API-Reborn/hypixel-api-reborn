import BedWarsMode from './BedWarsMode.js';
class BedWarsTwoFour extends BedWarsMode {
    tourney;
    constructor(data) {
        super(data, 'two_four');
        this.tourney = new BedWarsMode(data, 'tourney_bedwars_two_four_0');
    }
}
export default BedWarsTwoFour;
//# sourceMappingURL=BedWarsTwoFour.js.map