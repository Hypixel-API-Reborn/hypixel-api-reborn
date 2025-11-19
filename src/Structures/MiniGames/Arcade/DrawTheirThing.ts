class DrawTheirThing {
  wins: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_draw_their_thing || 0;
  }
}

export default DrawTheirThing;
