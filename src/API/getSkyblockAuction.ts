import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockAuction from '../Structures/SkyBlock/Auctions/SkyblockAuction.js';
import SkyblockBaseAucitonInfo from '../Structures/SkyBlock/Auctions/SkyblockBaseAuctionInfo.js';
import type { AuctionFetchOptions, AuctionRequestOptions, SkyblockAuctionResult } from '../Types/API.js';

class getSkyblockAction extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(
    type: AuctionFetchOptions,
    query: string,
    options?: AuctionRequestOptions
  ): Promise<SkyblockAuctionResult | RequestData> {
    let filter: string | null;
    if (type === undefined) throw new Error(this.client.errors.BAD_AUCTION_FILTER);
    if (query === undefined) throw new Error(this.client.errors.NO_UUID);

    switch (type) {
      case 'PROFILE': {
        filter = 'profile';
        break;
      }
      case 'PLAYER': {
        filter = 'player';
        break;
      }
      case 'AUCTIONID': {
        filter = 'uuid';
        break;
      }
      default: {
        filter = null;
        break;
      }
    }

    if (null === filter) throw new Error(this.client.errors.BAD_AUCTION_FILTER);

    const res = await this.client.requestHandler.request(`/skyblock/auction?${filter}=${query}`, options);
    if (res.options.raw) return res;
    return {
      info: new SkyblockBaseAucitonInfo(res.data),
      auctions: res.data.auctions.map(
        (auction: Record<string, any>) => new SkyblockAuction(auction, options?.includeItemBytes ?? false)
      )
    };
  }
}

export default getSkyblockAction;
