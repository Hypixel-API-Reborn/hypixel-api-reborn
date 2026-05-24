class HypixelAPIRebornError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Hypixel API Reborn';
  }

  override toString(): string {
    return this.message;
  }
}

export default HypixelAPIRebornError;
