class PropHunt {
  winsAsSeeker: number;
  winsAsHider: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.winsAsSeeker = data?.prop_hunt_seeker_wins_hide_and_seek || 0;
    this.winsAsHider = data?.prop_hunt_hider_wins_hide_and_seek || 0;
    this.wins = this.winsAsSeeker + this.winsAsHider;
  }
}

export default PropHunt;
