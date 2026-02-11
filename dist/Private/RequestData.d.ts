import type { RequestOptions } from '../Types/Requests.js';
declare class RequestData {
    readonly data: any;
    readonly headers: Record<string, any>;
    readonly statusCode: number;
    readonly options: RequestOptions;
    readonly requestTimestamp: number;
    readonly requestAt: Date;
    readonly requestUrl: string;
    readonly cached: boolean;
    constructor(data: Record<string, any>, headers: Record<string, any>, info: {
        status: number;
        url: string;
        options: RequestOptions;
        cached: boolean;
        timestamp?: number;
    });
    isRaw(): this is RequestData;
}
export default RequestData;
//# sourceMappingURL=RequestData.d.ts.map