import Endpoint from '../Private/Endpoint.js';
import type RequestData from '../Private/RequestData.js';
import type { AuctionRequestOptions, SkyBlockAuctionResult } from '../Types/API.js';
declare class getSkyBlockEndedAuctions extends Endpoint {
    execute(options?: AuctionRequestOptions): Promise<SkyBlockAuctionResult | RequestData>;
}
export default getSkyBlockEndedAuctions;
//# sourceMappingURL=getSkyBlockEndedAuctions.d.ts.map