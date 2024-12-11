import Auction from '../Structures/SkyBlock/Auctions/Auction.js';
import AuctionInfo from '../Structures/SkyBlock/Auctions/AuctionInfo.js';
import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import { AuctionRequestOptions, SkyblockAuctionsResult } from '../Types/API.js';

class getSkyblockAuctions extends Endpoint {
  readonly client: Client;
  declare options: AuctionRequestOptions;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: number | '*', options?: AuctionRequestOptions): Promise<SkyblockAuctionsResult> {
    if (!query) throw new Error(this.client.errors.INVALID_OPTION_VALUE);
    if ('number' === typeof query && 0 >= query) throw new Error(this.client.errors.INVALID_OPTION_VALUE);
    if ('number' !== typeof query && '*' !== query) throw new Error(this.client.errors.INVALID_OPTION_VALUE);
    this.options = this.parseOptions(options);
    if ('*' === query) return await this.getAllPages();
    return await this.getPage(query);
  }

  async getAllPages(): Promise<SkyblockAuctionsResult> {
    const page = 0;
    const { info, auctions } = await this.getPage(page);
    const pages = info.totalPages;
    const requests = [];
    for (let i = 1; i < pages; i++) {
      requests.push(this.getPage(i));
    }
    const results = await Promise.all(requests);
    results.forEach(({ auctions: newAuctions }) => {
      auctions.push(...newAuctions);
    });
    return { info, auctions };
  }

  async getPage(page: number): Promise<SkyblockAuctionsResult> {
    const res = await this.client.requestHandler.request(`/skyblock/auctions?page=${page}`, this.options);
    return {
      info: new AuctionInfo(res.data),
      auctions: res.data.auctions.map((a: any) => new Auction(a))
    };
  }

  private parseOptions(options: any): AuctionRequestOptions {
    return {
      includeItemBytes: options?.includeItemBytes ?? false,
      noCache: options?.noCache ?? false
    };
  }
}

export default getSkyblockAuctions;
