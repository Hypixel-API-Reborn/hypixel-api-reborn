import BedWarsMode from './BedWarsMode.js';
class BedWarsEightOne extends BedWarsMode {
    oneblock;
    rush;
    ultimate;
    constructor(data) {
        super(data, 'eight_one');
        this.oneblock = new BedWarsMode(data, 'eight_one_oneblock');
        this.rush = new BedWarsMode(data, 'eight_one_rush');
        this.ultimate = new BedWarsMode(data, 'eight_one_ultimate');
    }
}
export default BedWarsEightOne;
//# sourceMappingURL=BedWarsEightOne.js.map