import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockMuseum from '../Structures/SkyBlock/Museum/SkyblockMuseum.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockMuseum extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(profileId: string, options?: RequestOptions): Promise<SkyblockMuseum | RequestData> {
    if (!profileId) throw new Error(this.client.errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/skyblock/museum?profile=${profileId}`, options);
    if (res.options.raw) return res;
    return new SkyblockMuseum(res.data);
  }
}

export default getSkyblockMuseum;
