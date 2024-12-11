class PartyPooper {
  winsAsSeeker: number;
  winsAsHider: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.winsAsSeeker = data?.party_pooper_seeker_wins_hide_and_seek || 0;
    this.winsAsHider = data?.party_pooper_hider_wins_hide_and_seek || 0;
    this.wins = this.winsAsSeeker + this.winsAsHider;
  }
}

export default PartyPooper;
