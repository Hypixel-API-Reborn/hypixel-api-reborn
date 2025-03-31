import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import SkyblockAuction from '../Structures/SkyBlock/Auctions/SkyblockAuction.js';
import SkyblockBaseAucitonInfo from '../Structures/SkyBlock/Auctions/SkyblockBaseAuctionInfo.js';
import type RequestData from '../Private/RequestData.js';
import type { AuctionRequestOptions, SkyblockAuctionResult } from '../Types/API.js';

class getSkyblockEndedAuctions extends Endpoint {
  override readonly client: Client;
  declare options: AuctionRequestOptions;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: AuctionRequestOptions): Promise<SkyblockAuctionResult | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/auctions_ended', options);
    if (res.options.raw) return res;
    return {
      info: new SkyblockBaseAucitonInfo(res.data),
      auctions: res.data.auctions.map((auction: Record<string, any>) => new SkyblockAuction(auction))
    };
  }
}

export default getSkyblockEndedAuctions;
