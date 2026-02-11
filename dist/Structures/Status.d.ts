import Game from './Game.js';
import type RequestData from '../Private/RequestData.js';
declare class Status {
    online: boolean;
    game: Game | null;
    mode: string | null;
    map: string | null;
    constructor(data: Record<string, any>);
    toString(): 'Online' | 'Offline';
    isRaw(): this is RequestData;
}
export default Status;
//# sourceMappingURL=Status.d.ts.map