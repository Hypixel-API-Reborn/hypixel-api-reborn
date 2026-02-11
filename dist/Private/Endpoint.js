import Client from '../Client.js';
import Errors from '../Errors.js';
class Endpoint {
    client;
    constructor(client) {
        this.client = client;
    }
    execute(...args) {
        throw new Error(Errors.NOT_IMPLEMENTED);
    }
}
export default Endpoint;
//# sourceMappingURL=Endpoint.js.map