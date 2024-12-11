import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockNews from '../Structures/SkyBlock/News/SkyblockNews.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockNews extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<SkyblockNews[] | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/news', options);
    if (res.options.raw) return res;
    return res.data.items.map((i: any) => new SkyblockNews(i));
  }
}

export default getSkyblockNews;
