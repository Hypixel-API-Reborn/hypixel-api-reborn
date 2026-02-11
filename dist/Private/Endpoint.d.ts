import Client from '../Client.js';
declare class Endpoint {
    readonly client: Client;
    constructor(client: Client);
    execute(...args: any[]): Promise<any> | any;
}
export default Endpoint;
//# sourceMappingURL=Endpoint.d.ts.map