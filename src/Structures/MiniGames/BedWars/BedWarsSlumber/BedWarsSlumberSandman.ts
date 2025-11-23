class BedWarsSlumberSandman {
  expMultiplier: number;
  ticketMultiplier: number;
  constructor(data: Record<string, any>) {
    this.expMultiplier = data?.exp_multiplier || 0;
    this.ticketMultiplier = data?.ticket_multiplier || 0;
  }
}

export default BedWarsSlumberSandman;
