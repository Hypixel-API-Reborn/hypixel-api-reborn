import PartyPooper from './PartyPooper.js';
import PropHunt from './PropHunt.js';

class HideAndSeek {
  partyPooper: PartyPooper;
  propHunt: PropHunt;
  winsAsSeeker: number;
  winsAsHider: number;
  constructor(data: Record<string, any>) {
    this.partyPooper = new PartyPooper(data);
    this.propHunt = new PropHunt(data);
    this.winsAsSeeker = data?.seeker_wins_hide_and_seek || 0;
    this.winsAsHider = data?.hider_wins_hide_and_seek || 0;
  }
}

export default HideAndSeek;
