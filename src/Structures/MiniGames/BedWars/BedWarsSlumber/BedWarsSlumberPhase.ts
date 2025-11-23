class BedWarsSlumberPhase {
  current: number;
  constructor(data: Record<string, any>) {
    this.current = data?.current || 0;
  }
}

export default BedWarsSlumberPhase;
