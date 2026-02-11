class Leaderboard {
    path;
    prefix;
    title;
    location;
    count;
    leaders;
    constructor(data) {
        this.path = data?.path || '';
        this.prefix = data?.prefix || '';
        this.title = data?.title || '';
        this.location = data?.location || '0,0,0';
        this.count = data?.count || 0;
        this.leaders = data?.leaders || [];
    }
}
export default Leaderboard;
//# sourceMappingURL=Leaderboard.js.map