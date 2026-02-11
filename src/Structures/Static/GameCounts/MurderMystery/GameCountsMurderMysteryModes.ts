class GameCountsMurderMysteryModes {
  doubleUp: number;
  infection: number;
  assassins: number;
  classic: number;
  constructor(data: Record<string, any>) {
    this.doubleUp = data?.MURDER_DOUBLE_UP || 0;
    this.infection = data?.MURDER_INFECTION || 0;
    this.assassins = data?.MURDER_ASSASSINS || 0;
    this.classic = data?.MURDER_CLASSIC || 0;
  }
}

export default GameCountsMurderMysteryModes;
