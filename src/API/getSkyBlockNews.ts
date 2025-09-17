import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockNews from '../Structures/SkyBlock/News/SkyBlockNews.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockNews extends Endpoint {
  override async execute(options?: RequestOptions): Promise<SkyBlockNews[] | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/news', options);
    if (res.options.raw) return res;
    const news = res.data.items.map((news: any) => new SkyBlockNews(news));
    return Object.assign(news, {
      isRaw(): this is RequestData {
        return false;
      }
    });
  }
}

export default getSkyBlockNews;
