import type { RequestOptions } from '../Types/Requests.js';
declare class RawRequestData<T = any> {
    readonly rawData: T;
    readonly headers: Headers;
    readonly statusCode: number;
    readonly options: RequestOptions;
    readonly requestTimestamp: number;
    readonly requestAt: Date;
    readonly requestUrl: string;
    readonly cached: boolean;
    constructor(data: T, headers: Headers, info: {
        status: number;
        url: string;
        options: RequestOptions;
        cached: boolean;
        timestamp?: number;
    });
}
export default RawRequestData;
//# sourceMappingURL=RawRequestData.d.ts.map