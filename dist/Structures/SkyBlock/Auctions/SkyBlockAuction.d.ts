import SkyBlockAuctionBid from './SkyBlockAuctionBid.js';
import SkyBlockBaseAuction from './SkyBlockBaseAuction.js';
import type { Rarity } from '../../../Types/SkyBlock.js';
import type { UUID } from '../../../Types/Global.js';
declare class SkyBlockAuction extends SkyBlockBaseAuction {
    coop: UUID[];
    auctionStartTimestamp: number;
    auctionStartAt: Date;
    auctionEndTimestamp: number | null;
    auctionEndAt: Date | null;
    item: string;
    itemLore: string;
    rarity: Rarity | 'UNKNOWN';
    startingBid: number;
    highestBid: number;
    bids: SkyBlockAuctionBid[];
    claimed: boolean;
    claimedBidders: string[];
    constructor(data: Record<string, any>, includeItemBytes?: boolean);
    toString(): string;
}
export default SkyBlockAuction;
//# sourceMappingURL=SkyBlockAuction.d.ts.map