import SkyBlockMuseumMember from './SkyBlockMuseumMember.js';
import type RequestData from '../../../Private/RequestData.js';
import type { UUID } from '../../../Types/Global.js';
declare class SkyBlockMuseum {
    members: Record<UUID, SkyBlockMuseumMember>;
    constructor(data: Record<string, any>);
    isRaw(): this is RequestData;
}
export default SkyBlockMuseum;
//# sourceMappingURL=SkyBlockMuseum.d.ts.map