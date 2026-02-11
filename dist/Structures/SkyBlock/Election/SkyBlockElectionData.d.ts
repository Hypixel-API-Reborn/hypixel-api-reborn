import SkyBlockElection from './SkyBlockElection.js';
import type RequestData from '../../../Private/RequestData.js';
declare class SkyBlockElectionData {
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date;
    lastElectionResults: SkyBlockElection;
    currentElection: SkyBlockElection | null;
    constructor(data: Record<string, any>);
    isRaw(): this is RequestData;
}
export default SkyBlockElectionData;
//# sourceMappingURL=SkyBlockElectionData.d.ts.map