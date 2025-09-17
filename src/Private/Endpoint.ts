import Client from '../Client.js';
import Errors from '../Errors.ts';

class Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  execute(...args: any[]): Promise<any> | any {
    throw new Error(Errors.NOT_IMPLEMENTED);
  }
}

export default Endpoint;
