class HalloweenSimulator {
    candyFound;
    wins;
    constructor(data) {
        this.candyFound = data?.candy_found_halloween_simulator || 0;
        this.wins = data?.wins_halloween_simulator || 0;
    }
}
export default HalloweenSimulator;
//# sourceMappingURL=HalloweenSimulator.js.map