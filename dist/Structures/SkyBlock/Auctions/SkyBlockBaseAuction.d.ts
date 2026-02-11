import ItemBytes from '../../ItemBytes.js';
declare class SkyBlockBaseAuction {
    auctionId: string;
    auctioneerUuid: string;
    auctioneerProfile: string;
    bin: boolean;
    itemBytes: ItemBytes | null;
    constructor(data: Record<string, any>, includeItemBytes: boolean);
    toString(): string;
}
export default SkyBlockBaseAuction;
//# sourceMappingURL=SkyBlockBaseAuction.d.ts.map