class BedWarsSlumberMinion {
  enderDust: number;
  enderDustCollected: number;
  games: number;
  tickets: number;
  ticketsCollected: number;
  constructor(data: Record<string, any>) {
    this.enderDust = data?.ender_dust || 0;
    this.enderDustCollected = data?.ender_dust_collected || 0;
    this.games = data?.games || 0;
    this.tickets = data?.tickets || 0;
    this.ticketsCollected = data?.tickets_collected || 0;
  }
}

export default BedWarsSlumberMinion;
