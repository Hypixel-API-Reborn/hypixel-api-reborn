import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockBaseAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import type RequestData from '../Private/RequestData.js';
import type { AuctionRequestOptions, SkyBlockAuctionResult } from '../Types/API.js';

class getSkyBlockEndedAuctions extends Endpoint {
  override readonly client: Client;
  declare options: AuctionRequestOptions;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: AuctionRequestOptions): Promise<SkyBlockAuctionResult | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/auctions_ended', options);
    if (res.options.raw) return res;
    return {
      info: new SkyBlockBaseAuctionInfo(res.data),
      auctions: res.data.auctions.map((Auction: Record<string, any>) => new SkyBlockAuction(Auction)),
      isRaw(): this is RequestData {
        return false;
      }
    };
  }
}

export default getSkyBlockEndedAuctions;
