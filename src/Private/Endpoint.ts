import Client from '../Client.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from './HypixelAPIRebornError.ts';

class Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  execute(...args: any[]): Promise<any> | any {
    throw new HypixelAPIRebornError(Errors.NOT_IMPLEMENTED);
  }
}

export default Endpoint;
