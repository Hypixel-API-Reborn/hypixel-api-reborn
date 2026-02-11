import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import type { AuctionFetchOptions, AuctionRequestOptions, SkyBlockAuctionResult } from '../Types/API.js';
declare class getSkyBlockAction extends Endpoint {
    execute(type: AuctionFetchOptions, query: string, options?: AuctionRequestOptions): Promise<SkyBlockAuctionResult | RequestData>;
}
export default getSkyBlockAction;
//# sourceMappingURL=getSkyBlockAuction.d.ts.map