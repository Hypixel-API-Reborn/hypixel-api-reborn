import TourneyData from './TourneyData.js';

class Tourney {
  firstJoinLobby: string | null;
  totalTributes: number;
  shopSort: string;
  hidePurchased: boolean;
  turneyData: TourneyData[];
  constructor(data: Record<string, any>) {
    this.firstJoinLobby = data.first_join_lobby || null;
    this.totalTributes = data.total_tributes || 0;
    this.shopSort = data.shop_sort || '';
    this.hidePurchased = data.hide_purchased || false;
    this.turneyData = [];
    Object.keys(data)
      .filter((key) => ['first_join_lobby', 'total_tributes', 'shop_sort', 'hide_purchased'].includes(key))
      .forEach((key) => this.turneyData.push(new TourneyData(data[key])));
  }
}

export default Tourney;
