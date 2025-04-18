import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockBaseAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import type { AuctionFetchOptions, AuctionRequestOptions, SkyBlockAuctionResult } from '../Types/API.js';

class getSkyBlockAction extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(
    type: AuctionFetchOptions,
    query: string,
    options?: AuctionRequestOptions
  ): Promise<SkyBlockAuctionResult | RequestData> {
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
      case 'AUCTION_ID': {
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
      info: new SkyBlockBaseAuctionInfo(res.data),
      auctions: res.data.auctions.map(
        (Auction: Record<string, any>) => new SkyBlockAuction(Auction, options?.includeItemBytes ?? false)
      )
    };
  }
}

export default getSkyBlockAction;
