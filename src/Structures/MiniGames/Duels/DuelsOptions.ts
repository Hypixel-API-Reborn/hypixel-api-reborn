import type { DuelsRematchOption } from '../../../Types/index.js';

class DuelsOptions {
  challengesEnabled: boolean;
  chatEnabled: boolean;
  kitMenu: boolean;
  showLeaderboard: boolean;
  showMapDetail: boolean;
  rematch: DuelsRematchOption;
  constructor(data: Record<string, any>) {
    this.challengesEnabled = data?.challenges_enabled ?? false;
    this.chatEnabled = (data?.chat_enabled ?? 'on') === 'on';
    this.kitMenu = (data?.kit_menu_option ?? 'on') === 'on';
    this.showLeaderboard = (data?.show_lb_option ?? 'on') === 'on';
    this.showMapDetail = (data?.show_map_detail ?? 'on') === 'on';
    this.rematch = data?.rematch_option_1 ?? 'default';
  }
}

export default DuelsOptions;
