import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockAuctionInfo.js';
class getSkyBlockAuctions extends Endpoint {
    async execute(query, options) {
        if (!query)
            throw new Error(Errors.INVALID_OPTION_VALUE);
        if (typeof query === 'number' && query <= 0)
            throw new Error(Errors.INVALID_OPTION_VALUE);
        if (typeof query !== 'number' && query !== '*')
            throw new Error(Errors.INVALID_OPTION_VALUE);
        if (query === '*')
            return await this.getAllPages();
        return await this.getPage(query, options);
    }
    async getAllPages() {
        const page = 0;
        const { info, auctions } = (await this.getPage(page));
        const pages = info.totalPages;
        const requests = [];
        for (let i = 1; i < pages; i++) {
            requests.push(this.getPage(i));
        }
        const results = (await Promise.all(requests));
        results.forEach(({ auctions: newAuctions }) => {
            auctions.push(...newAuctions);
        });
        return {
            info,
            auctions,
            isRaw() {
                return false;
            }
        };
    }
    async getPage(page, options) {
        const res = await this.client.requestHandler.request(`/skyblock/auctions?page=${page}`, options);
        if (options?.raw)
            return res;
        return {
            info: new SkyBlockAuctionInfo(res.data),
            auctions: res.data.auctions.map((Auction) => new SkyBlockAuction(Auction, options?.includeItemBytes || false)),
            isRaw() {
                return false;
            }
        };
    }
}
export default getSkyBlockAuctions;
//# sourceMappingURL=getSkyBlockAuctions.js.map