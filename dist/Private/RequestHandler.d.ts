import Client from '../Client.js';
import RequestData from './RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class RequestHandler {
    readonly client: Client;
    private BASE_URL;
    constructor(client: Client);
    setBaseURL(url?: string): this;
    request(endpoint: string, options?: RequestOptions): Promise<RequestData>;
    toUUID(input: string): Promise<string>;
    fetchExternalData(url: string): Promise<RequestData>;
}
export default RequestHandler;
//# sourceMappingURL=RequestHandler.d.ts.map