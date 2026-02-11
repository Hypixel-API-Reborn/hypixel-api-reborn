import Endpoint from '../Private/Endpoint.js';
import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockBaseAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
class getSkyBlockEndedAuctions extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/skyblock/auctions_ended', options);
        if (res.options.raw)
            return res;
        return {
            info: new SkyBlockBaseAuctionInfo(res.data),
            auctions: res.data.auctions.map((Auction) => new SkyBlockAuction(Auction)),
            isRaw() {
                return false;
            }
        };
    }
}
export default getSkyBlockEndedAuctions;
//# sourceMappingURL=getSkyBlockEndedAuctions.js.map