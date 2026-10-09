import BedWarsPracticeBridging from './BedWarsPracticeBridging.ts';
import BedWarsPracticeMode from './BedWarsPracticeMode.ts';
import type { BedWarsPracticeModeId } from '../../../../Types/index.ts';

class BedWarsPractice {
  bridging: BedWarsPracticeBridging;
  fireballJumping: BedWarsPracticeMode;
  mlg: BedWarsPracticeMode;
  pearlClutching: BedWarsPracticeMode;
  selected: BedWarsPracticeModeId | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.bridging = new BedWarsPracticeBridging(data?.bridging ?? {}, data?.records ?? {});
    this.fireballJumping = new BedWarsPracticeMode(data?.fireball_jumping ?? {});
    this.mlg = new BedWarsPracticeMode(data?.mlg ?? {});
    this.pearlClutching = new BedWarsPracticeMode(data?.pearl_clutching ?? {});
    this.selected = data?.selected ?? 'UNKNOWN';
  }
}

export default BedWarsPractice;
