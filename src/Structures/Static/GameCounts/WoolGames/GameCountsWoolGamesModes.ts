class GameCountsWoolGamesModes {
  captureTheWoolTwoTwenty: number;
  sheepWarsTwoSix: number;
  woolWarsTwoFour: number;
  constructor(data: Record<string, any>) {
    this.captureTheWoolTwoTwenty = data?.capture_the_wool_two_twenty || 0;
    this.sheepWarsTwoSix = data?.sheep_wars_two_six || 0;
    this.woolWarsTwoFour = data?.wool_wars_two_four || 0;
  }
}

export default GameCountsWoolGamesModes;
