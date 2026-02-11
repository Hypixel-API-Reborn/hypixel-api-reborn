import SkyBlockCollection from './SkyBlockCollection.js';
import type RequestData from '../../../Private/RequestData.js';
declare class SkyBlockCollections {
    lastUpdated: number;
    lastUpdatedAt: Date;
    version: string;
    farming: SkyBlockCollection[];
    mining: SkyBlockCollection[];
    combat: SkyBlockCollection[];
    foraging: SkyBlockCollection[];
    fishing: SkyBlockCollection[];
    rift: SkyBlockCollection[];
    constructor(data: Record<string, any>);
    toString(): string;
    isRaw(): this is RequestData;
}
export default SkyBlockCollections;
//# sourceMappingURL=SkyBlockCollections.d.ts.map