import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockNews from '../Structures/SkyBlock/News/SkyBlockNews.js';
class getSkyBlockNews extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/skyblock/news', options);
        if (res.options.raw)
            return res;
        const news = res.data.items.map((news) => new SkyBlockNews(news));
        return Object.assign(news, {
            isRaw() {
                return false;
            }
        });
    }
}
export default getSkyBlockNews;
//# sourceMappingURL=getSkyBlockNews.js.map