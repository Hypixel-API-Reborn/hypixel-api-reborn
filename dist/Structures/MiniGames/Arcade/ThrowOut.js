class ThrowOut {
    deaths;
    kills;
    wins;
    disguise;
    constructor(data) {
        this.deaths = data?.deaths_throw_out || 0;
        this.kills = data?.kills_throw_out || 0;
        this.wins = data?.wins_throw_out || 0;
        this.disguise = data?.throwout_disguise || 'UNKNOWN';
    }
}
export default ThrowOut;
//# sourceMappingURL=ThrowOut.js.map