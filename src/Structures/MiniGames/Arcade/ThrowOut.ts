import type { ArcadeThrowOutDisguise } from '../../../Types/Player.js';

class ThrowOut {
  deaths: number;
  kills: number;
  wins: number;
  disguise: ArcadeThrowOutDisguise | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.deaths = data?.deaths_throw_out || 0;
    this.kills = data?.kills_throw_out || 0;
    this.wins = data?.wins_throw_out || 0;
    this.disguise = data?.throwout_disguise || 'UNKNOWN';
  }
}

export default ThrowOut;
