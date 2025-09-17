import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.ts';
import RequestData from '../Private/RequestData.js';
import SkyBlockMuseum from '../Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockMuseum extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(profileId: string, options?: RequestOptions): Promise<SkyBlockMuseum | RequestData> {
    if (!profileId) throw new Error(Errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/skyblock/museum?profile=${profileId}`, options);
    if (res.options.raw) return res;
    return new SkyBlockMuseum(res.data);
  }
}

export default getSkyBlockMuseum;
