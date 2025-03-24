import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import SkyblockAuction from '../Structures/SkyBlock/Auctions/SkyblockAuction.js';
import SkyblockAuctionInfo from '../Structures/SkyBlock/Auctions/SkyblockAuctionsInfo.js';
import type RequestData from '../Private/RequestData.js';
import type { AuctionRequestOptions, SkyblockAuctionsResult } from '../Types/API.js';

class getSkyblockAuctions extends Endpoint {
  override readonly client: Client;
  declare options: AuctionRequestOptions;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(
    query: number | '*',
    options?: AuctionRequestOptions
  ): Promise<SkyblockAuctionsResult | RequestData> {
    if (!query) throw new Error(this.client.errors.INVALID_OPTION_VALUE);
    if ('number' === typeof query && 0 >= query) throw new Error(this.client.errors.INVALID_OPTION_VALUE);
    if ('number' !== typeof query && '*' !== query) throw new Error(this.client.errors.INVALID_OPTION_VALUE);
    if ('*' === query) return await this.getAllPages();
    return await this.getPage(query, options);
  }

  async getAllPages(): Promise<SkyblockAuctionsResult> {
    const page = 0;
    const { info, auctions } = (await this.getPage(page)) as SkyblockAuctionsResult;
    const pages = info.totalPages;
    const requests = [];
    for (let i = 1; i < pages; i++) {
      requests.push(this.getPage(i));
    }
    const results = (await Promise.all(requests)) as SkyblockAuctionsResult[];
    results.forEach(({ auctions: newAuctions }) => {
      auctions.push(...newAuctions);
    });
    return { info, auctions };
  }

  private async getPage(page: number, options?: AuctionRequestOptions): Promise<SkyblockAuctionsResult | RequestData> {
    const res = await this.client.requestHandler.request(`/skyblock/auctions?page=${page}`, options);
    if (options?.raw) return res;
    return {
      info: new SkyblockAuctionInfo(res.data),
      auctions: res.data.auctions.map(
        (auction: Record<string, any>) => new SkyblockAuction(auction, options?.includeItemBytes || false)
      )
    };
  }
}

export default getSkyblockAuctions;
