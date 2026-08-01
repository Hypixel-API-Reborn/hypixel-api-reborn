import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockBaseAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import type { AuctionRequestOptions, SkyBlockAuctionResult } from '../Types/API.js';

class getSkyBlockEndedAuctions extends Endpoint {
  override async execute(options?: AuctionRequestOptions): Promise<RequestData<SkyBlockAuctionResult>> {
    const res = await this.client.requestHandler.request('/skyblock/auctions_ended', options);
    return new RequestData<SkyBlockAuctionResult>(
      {
        info: new SkyBlockBaseAuctionInfo(res.rawData),
        auctions: res.rawData.auctions.map((Auction: Record<string, any>) => new SkyBlockAuction(Auction))
      },
      res
    );
  }
}

export default getSkyBlockEndedAuctions;
