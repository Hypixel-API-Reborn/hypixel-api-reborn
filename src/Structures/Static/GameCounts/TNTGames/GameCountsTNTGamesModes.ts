class GameCountsTNTGamesModes {
  PVPRun: number;
  TNTTag: number;
  TNTRun: number;
  bowSpleef: number;
  capture: number;
  constructor(data: Record<string, any>) {
    this.PVPRun = data?.PVPRUN || 0;
    this.TNTTag = data?.TNTAG || 0;
    this.TNTRun = data?.TNTRUN || 0;
    this.bowSpleef = data?.BOWSPLEEF || 0;
    this.capture = data?.CAPTURE || 0;
  }
}

export default GameCountsTNTGamesModes;
