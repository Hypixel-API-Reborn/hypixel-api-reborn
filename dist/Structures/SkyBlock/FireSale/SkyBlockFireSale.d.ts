import type RequestData from '../../../Private/RequestData.js';
declare class SkyBlockFireSale {
    itemId: string;
    startTimestamp: number;
    startAt: Date;
    endTimestamp: number;
    endAt: Date;
    amount: number;
    price: number;
    constructor(data: Record<string, any>);
    toString(): string;
    isRaw(): this is RequestData;
}
export default SkyBlockFireSale;
//# sourceMappingURL=SkyBlockFireSale.d.ts.map