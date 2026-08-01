import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockNews from '../Structures/SkyBlock/News/SkyBlockNews.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockNews extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<SkyBlockNews[]>> {
    const res = await this.client.requestHandler.request('/skyblock/news', options);
    return new RequestData<SkyBlockNews[]>(
      res.rawData.items.map((news: any) => new SkyBlockNews(news)),
      res
    );
  }
}

export default getSkyBlockNews;
