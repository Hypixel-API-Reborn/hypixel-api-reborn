import BedWarsPracticeBase from './BedWarsPracticeBase.js';
import BedWarsPracticeBaseBlocksPlaced from './BedWarsPracticeBaseBlocksPlaced.js';
import BedWarsPracticeBridging from './BedWarsPracticeBridging.js';
import type { BedWarsPracticeModes } from '../../../../Types/Player.js';

class BedWarsPracticeStats {
  selected: BedWarsPracticeModes | 'NONE';
  bridging: BedWarsPracticeBridging;
  fireballJumping: BedWarsPracticeBaseBlocksPlaced;
  pearlClutching: BedWarsPracticeBase;
  MLG: BedWarsPracticeBaseBlocksPlaced;
  constructor(data: Record<string, any>) {
    this.selected = data?.practice?.selected || 'NONE';
    this.bridging = new BedWarsPracticeBridging(data?.practice?.bridging, data?.practice?.records);
    this.fireballJumping = new BedWarsPracticeBaseBlocksPlaced(data?.practice?.fireball_jumping || {});
    this.pearlClutching = new BedWarsPracticeBase(data?.practice?.pearl_clutching || {});
    this.MLG = new BedWarsPracticeBaseBlocksPlaced(data?.practice?.mlg || {});
  }
}

export default BedWarsPracticeStats;
