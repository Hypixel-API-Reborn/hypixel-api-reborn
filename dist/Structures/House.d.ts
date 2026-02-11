import type RequestData from '../Private/RequestData.js';
import type { UUID } from '../Types/Global.js';
declare class House {
    name: string;
    uuid: UUID;
    owner: string;
    createdAtTimestamp: number | null;
    createdAt: Date | null;
    players: number;
    cookies: number;
    constructor(data: Record<string, any>);
    toString(): string;
    isRaw(): this is RequestData;
}
export default House;
//# sourceMappingURL=House.d.ts.map