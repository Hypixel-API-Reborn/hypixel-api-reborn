import GameCountsBasicModes from '../GameCountsBasicModes.ts';

class GameCountsSuperSmashModes extends GameCountsBasicModes {
  '1v1Normal': number;
  friendsNormal: number;
  '2v2Normal': number;
  constructor(data: Record<string, any>) {
    super(data);
    this['1v1Normal'] = data?.['1v1_normal'] || 0;
    this.friendsNormal = data?.friends_normal || 0;
    this['2v2Normal'] = data?.['.2v2_normal'] || 0;
  }
}

export default GameCountsSuperSmashModes;
