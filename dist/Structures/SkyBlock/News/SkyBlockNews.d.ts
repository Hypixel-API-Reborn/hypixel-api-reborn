import type RequestData from '../../../Private/RequestData.js';
declare class SkyBlockNews {
    title: string;
    link: string;
    date: Date | null;
    version: string | null;
    constructor(data: Record<string, any>);
    toString(): string;
    isRaw(): this is RequestData;
}
export default SkyBlockNews;
//# sourceMappingURL=SkyBlockNews.d.ts.map