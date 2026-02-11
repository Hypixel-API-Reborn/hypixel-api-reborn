class SantaSimulator {
    delivered;
    spotted;
    wins;
    constructor(data) {
        this.delivered = data?.delivered_santa_simulator || 0;
        this.spotted = data?.spotted_santa_simulator || 0;
        this.wins = data?.wins_santa_simulator || 0;
    }
}
export default SantaSimulator;
//# sourceMappingURL=SantaSimulator.js.map