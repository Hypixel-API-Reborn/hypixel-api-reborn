import Client from '../Client.js';
import NodeCache from 'node-cache';
declare class CacheHandler {
    readonly client: Client;
    cache: NodeCache;
    constructor(client: Client);
    set(key: string, value: any): any;
    has(key: string): boolean;
    get(key: string): any;
    keys(): string[];
    size(): number;
    clear(): void;
}
export default CacheHandler;
//# sourceMappingURL=CacheHandler.d.ts.map