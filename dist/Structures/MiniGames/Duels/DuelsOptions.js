class DuelsOptions {
    challengesEnabled;
    chatEnabled;
    kitMenu;
    showLeaderboard;
    showMapDetail;
    rematch;
    constructor(data) {
        this.challengesEnabled = data?.challenges_enabled ?? false;
        this.chatEnabled = (data?.chat_enabled ?? 'on') === 'on';
        this.kitMenu = (data?.kit_menu_option ?? 'on') === 'on';
        this.showLeaderboard = (data?.show_lb_option ?? 'on') === 'on';
        this.showMapDetail = (data?.show_map_detail ?? 'on') === 'on';
        this.rematch = data?.rematch_option_1 ?? 'default';
    }
}
export default DuelsOptions;
//# sourceMappingURL=DuelsOptions.js.map