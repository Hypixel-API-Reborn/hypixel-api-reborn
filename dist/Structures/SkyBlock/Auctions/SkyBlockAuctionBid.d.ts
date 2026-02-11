import type { UUID } from '../../../Types/Global.js';
declare class SkyBlockAuctionBid {
    auctionId: UUID | 'UNKNOWN';
    profileId: UUID | 'UNKNOWN';
    amount: number;
    timestamp: number;
    at: Date;
    bidder: string;
    constructor(data: Record<string, any>);
    toString(): number;
}
export default SkyBlockAuctionBid;
//# sourceMappingURL=SkyBlockAuctionBid.d.ts.map