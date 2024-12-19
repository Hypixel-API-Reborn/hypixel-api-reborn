import Auction from '../Structures/SkyBlock/Auctions/Auction.js';
import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import type { AuctionRequestOptions } from '../Types/API.js';

class getSkyblockActionsByPlayer extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(query: string, options?: AuctionRequestOptions): Promise<Auction[] | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/skyblock/auction?player=${query}`, options);
    if (res.options.raw) return res;
    return res.data.auctions.map((a: any) => new Auction(a, options?.includeItemBytes ?? false));
  }
}

export default getSkyblockActionsByPlayer;
