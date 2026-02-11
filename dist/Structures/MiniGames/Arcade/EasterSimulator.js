class EasterSimulator {
    eggsFound;
    wins;
    constructor(data) {
        this.eggsFound = data?.eggs_found_easter_simulator || 0;
        this.wins = data?.wins_easter_simulator || 0;
    }
}
export default EasterSimulator;
//# sourceMappingURL=EasterSimulator.js.map