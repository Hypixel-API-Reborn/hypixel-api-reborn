class PlayerParkour {
  location: string;
  timeStart: number;
  timeTook: number;
  checkPoints: number[];
  constructor(data: Record<string, any>, checkPoints: Record<string, any>, location: string) {
    this.location = location;
    this.timeStart = data?.[location]?.[0].timeStart || 0;
    this.timeTook = data?.[location]?.[0].timeTook || 0;
    this.checkPoints = Object.keys(checkPoints?.[location] || {}).map(
      (checkPoint: string) => checkPoints?.[location]?.[checkPoint]
    );
  }
}

export default PlayerParkour;
