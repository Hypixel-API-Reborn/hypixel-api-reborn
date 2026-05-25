import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.ts';
import RequestData from '../Private/RequestData.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockBaseAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import type { AuctionFetchOption, AuctionRequestOptions, SkyBlockAuctionResult } from '../Types/API.js';

class getSkyBlockAction extends Endpoint {
  override async execute(
    type: AuctionFetchOption,
    query: string,
    options?: AuctionRequestOptions
  ): Promise<SkyBlockAuctionResult | RequestData> {
    let filter: string | null;
    if (type === undefined) throw new HypixelAPIRebornError(Errors.BAD_AUCTION_FILTER);
    if (query === undefined) throw new HypixelAPIRebornError(Errors.NO_UUID);

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

    if (filter === null) throw new HypixelAPIRebornError(Errors.BAD_AUCTION_FILTER);

    const res = await this.client.requestHandler.request(`/skyblock/auction?${filter}=${query}`, options);
    if (res.options.raw) return res;
    return {
      info: new SkyBlockBaseAuctionInfo(res.data),
      auctions: res.data.auctions.map(
        (Auction: Record<string, any>) => new SkyBlockAuction(Auction, options?.includeItemBytes ?? false)
      ),
      isRaw(): this is RequestData {
        return false;
      }
    };
  }
}

export default getSkyBlockAction;
