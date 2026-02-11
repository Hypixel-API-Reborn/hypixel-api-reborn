import Client from '../Client.js';
declare class RateLimit {
    readonly client: Client;
    requests: number;
    limit: number;
    initialized: boolean;
    interval: NodeJS.Timeout;
    constructor(client: Client);
    sync(): Promise<void>;
    reset(): void;
    initialize(): Promise<void>;
}
export default RateLimit;
//# sourceMappingURL=RateLimit.d.ts.map