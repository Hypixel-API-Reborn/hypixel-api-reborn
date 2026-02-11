class ArcadeOptions {
    showAllKillFeed;
    showEnemyWoolDropped;
    showEnemyWoolPickedUp;
    showOwnWoolDropped;
    showOwnWoolPickedUp;
    showTipHologram;
    showTips;
    showTutorialBook;
    constructor(data) {
        this.showAllKillFeed = (data?.option_show_all_killfeed || 'off') === 'on';
        this.showEnemyWoolDropped = (data?.option_show_enemy_wool_dropped || 'off') === 'on';
        this.showEnemyWoolPickedUp = (data?.option_show_enemy_wool_picked_up || 'off') === 'on';
        this.showOwnWoolDropped = (data?.option_show_own_wool_dropped || 'off') === 'on';
        this.showOwnWoolPickedUp = (data?.option_show_own_wool_picked_up || 'off') === 'on';
        this.showTipHologram = (data?.option_show_tip_hologram || 'off') === 'on';
        this.showTips = (data?.option_show_tips || 'off') === 'on';
        this.showTutorialBook = (data?.option_show_tutorial_book || 'off') === 'on';
    }
}
export default ArcadeOptions;
//# sourceMappingURL=ArcadeOptions.js.map