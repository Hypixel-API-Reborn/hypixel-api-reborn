import PlayerTourneyData from './PlayerTourneyData.js';
import type { PlayerTourneyShopSort } from '../../../Types/Player.js';

class PlayerTourney {
  firstJoinLobbyTimestamp: number | null;
  firstJoinLobbyAt: Date | null;
  totalTributes: number;
  shopSort: PlayerTourneyShopSort | 'UNKNOWN';
  hidePurchased: boolean;
  tourneyData: PlayerTourneyData[];
  constructor(data: Record<string, any>) {
    this.firstJoinLobbyTimestamp = data?.first_join_lobby || null;
    this.firstJoinLobbyAt = this.firstJoinLobbyTimestamp ? new Date(this.firstJoinLobbyTimestamp) : null;
    this.totalTributes = data?.total_tributes || 0;
    this.shopSort = data?.shop_sort || 'UNKNOWN';
    this.hidePurchased = data?.hide_purchased || false;
    this.tourneyData = [];
    Object.keys(data)
      .filter((key) => ['first_join_lobby', 'total_tributes', 'shop_sort', 'hide_purchased'].includes(key))
      .forEach((key) => this.tourneyData.push(new PlayerTourneyData(data[key], key)));
  }
}

export default PlayerTourney;
