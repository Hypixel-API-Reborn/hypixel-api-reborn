class HoleInTheWall {
    rounds;
    wins;
    color;
    recordF;
    recordQ;
    constructor(data) {
        this.rounds = data?.rounds_hole_in_the_wall || 0;
        this.wins = data?.wins_hole_in_the_wall || 0;
        this.color = data?.hitw_color || 'DEFAULT';
        this.recordF = data?.hitw_record_f || 0;
        this.recordQ = data?.hitw_record_q || 0;
    }
}
export default HoleInTheWall;
//# sourceMappingURL=HoleInTheWall.js.map