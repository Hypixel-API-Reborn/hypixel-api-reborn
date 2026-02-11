import Endpoint from '../Private/Endpoint.js';
import type RequestData from '../Private/RequestData.js';
import type { AuctionRequestOptions, SkyBlockAuctionsResult } from '../Types/API.js';
declare class getSkyBlockAuctions extends Endpoint {
    execute(query: number | '*', options?: AuctionRequestOptions): Promise<SkyBlockAuctionsResult | RequestData>;
    getAllPages(): Promise<SkyBlockAuctionsResult>;
    private getPage;
}
export default getSkyBlockAuctions;
//# sourceMappingURL=getSkyBlockAuctions.d.ts.map