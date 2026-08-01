import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockAuctionInfo.js';
import type { AuctionRequestOptions, SkyBlockAuctionsResult } from '../Types/API.js';

class getSkyBlockAuctions extends Endpoint {
  override async execute(
    query: number | '*',
    options?: AuctionRequestOptions
  ): Promise<RequestData<SkyBlockAuctionsResult>> {
    if (!query) throw new HypixelAPIRebornError(Errors.INVALID_OPTION_VALUE);
    if (typeof query === 'number' && query <= 0) throw new HypixelAPIRebornError(Errors.INVALID_OPTION_VALUE);
    if (typeof query !== 'number' && query !== '*') throw new HypixelAPIRebornError(Errors.INVALID_OPTION_VALUE);
    if (query === '*') return await this.getAllPages();
    return await this.getPage(query, options);
  }

  async getAllPages(): Promise<RequestData<SkyBlockAuctionsResult>> {
    const page = 0;
    const { parsed, raw } = await this.getPage(page);
    const { info, auctions } = parsed;
    const pages = info.totalPages;
    const requests = [];
    for (let i = 1; i < pages; i++) requests.push(this.getPage(i));
    const results = await Promise.all(requests);
    results.forEach(({ parsed }) => auctions.push(...parsed.auctions));
    return new RequestData<SkyBlockAuctionsResult>({ info, auctions }, raw);
  }

  private async getPage(page: number, options?: AuctionRequestOptions): Promise<RequestData<SkyBlockAuctionsResult>> {
    const res = await this.client.requestHandler.request(`/skyblock/auctions?page=${page}`, options);
    return new RequestData<SkyBlockAuctionsResult>(
      {
        info: new SkyBlockAuctionInfo(res.rawData),
        auctions: res.rawData.auctions.map(
          (Auction: Record<string, any>) => new SkyBlockAuction(Auction, options?.includeItemBytes || false)
        )
      },
      res
    );
  }
}

export default getSkyBlockAuctions;
