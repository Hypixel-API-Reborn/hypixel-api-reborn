class PlayerParkour {
    location;
    timeStart;
    timeTook;
    checkPoints;
    constructor(data, checkPoints, location) {
        this.location = location;
        this.timeStart = data?.[location]?.[0].timeStart || 0;
        this.timeTook = data?.[location]?.[0].timeTook || 0;
        this.checkPoints = Object.keys(checkPoints?.[location] || {}).map((checkPoint) => checkPoints?.[location]?.[checkPoint]);
    }
}
export default PlayerParkour;
//# sourceMappingURL=PlayerParkour.js.map