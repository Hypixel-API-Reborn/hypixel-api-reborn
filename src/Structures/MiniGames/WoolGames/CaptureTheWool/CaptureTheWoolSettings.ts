class CaptureTheWoolSettings {
  showTutorialBook: boolean;
  showTips: boolean;
  showTipHologram: boolean;
  showAllKillfeed: boolean;
  showEnemyWoolPickedUp: boolean;
  showOwnWoolDropped: boolean;
  showOwnWoolPickedUp: boolean;
  showEnemyWoolDropped: boolean;
  constructor(data: Record<string, any>) {
    this.showTutorialBook = data?.show_tutorial_book || true;
    this.showTips = data?.show_tips || true;
    this.showTipHologram = data?.show_tip_hologram || true;
    this.showAllKillfeed = data?.show_all_killfeed || true;
    this.showEnemyWoolPickedUp = data?.show_enemy_wool_picked_up || true;
    this.showOwnWoolDropped = data?.show_own_wool_dropped || true;
    this.showOwnWoolPickedUp = data?.show_own_wool_picked_up || true;
    this.showEnemyWoolDropped = data?.show_enemy_wool_dropped || true;
  }
}

export default CaptureTheWoolSettings;
