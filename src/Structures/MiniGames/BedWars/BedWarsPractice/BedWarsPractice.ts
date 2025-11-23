import BedWarsPracticeBridging from './BedWarsPracticeBridging.js';
import BedWarsPracticeMode from './BedWarsPracticeMode.js';
import type { BedWarsPracticeModeId } from '../../../../Types/Player.js';

class BedWarsPractice {
  bridging: BedWarsPracticeBridging;
  fireballJumping: BedWarsPracticeMode;
  mlg: BedWarsPracticeMode;
  pearlClutching: BedWarsPracticeMode;
  selected: BedWarsPracticeModeId | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.bridging = new BedWarsPracticeBridging(data?.bridging || {}, data?.records || {});
    this.fireballJumping = new BedWarsPracticeMode(data?.fireball_jumping || {});
    this.mlg = new BedWarsPracticeMode(data?.mlg || {});
    this.pearlClutching = new BedWarsPracticeMode(data?.pearl_clutching || {});
    this.selected = data?.selected || 'UNKNOWN';
  }
}

export default BedWarsPractice;
