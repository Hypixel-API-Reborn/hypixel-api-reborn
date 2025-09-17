import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.ts';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockAuctionInfo.js';
import type RequestData from '../Private/RequestData.js';
import type { AuctionRequestOptions, SkyBlockAuctionsResult } from '../Types/API.js';

class getSkyBlockAuctions extends Endpoint {
  override async execute(
    query: number | '*',
    options?: AuctionRequestOptions
  ): Promise<SkyBlockAuctionsResult | RequestData> {
    if (!query) throw new Error(Errors.INVALID_OPTION_VALUE);
    if ('number' === typeof query && 0 >= query) throw new Error(Errors.INVALID_OPTION_VALUE);
    if ('number' !== typeof query && '*' !== query) throw new Error(Errors.INVALID_OPTION_VALUE);
    if ('*' === query) return await this.getAllPages();
    return await this.getPage(query, options);
  }

  async getAllPages(): Promise<SkyBlockAuctionsResult> {
    const page = 0;
    const { info, auctions } = (await this.getPage(page)) as SkyBlockAuctionsResult;
    const pages = info.totalPages;
    const requests = [];
    for (let i = 1; i < pages; i++) {
      requests.push(this.getPage(i));
    }
    const results = (await Promise.all(requests)) as SkyBlockAuctionsResult[];
    results.forEach(({ auctions: newAuctions }) => {
      auctions.push(...newAuctions);
    });
    return {
      info,
      auctions,
      isRaw(): this is RequestData {
        return false;
      }
    };
  }

  private async getPage(page: number, options?: AuctionRequestOptions): Promise<SkyBlockAuctionsResult | RequestData> {
    const res = await this.client.requestHandler.request(`/skyblock/auctions?page=${page}`, options);
    if (options?.raw) return res;
    return {
      info: new SkyBlockAuctionInfo(res.data),
      auctions: res.data.auctions.map(
        (Auction: Record<string, any>) => new SkyBlockAuction(Auction, options?.includeItemBytes || false)
      ),
      isRaw(): this is RequestData {
        return false;
      }
    };
  }
}

export default getSkyBlockAuctions;
