import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockGarden from '../Structures/SkyBlock/SkyblockGarden.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockGarden extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(profileId: string, options?: RequestOptions): Promise<SkyblockGarden | RequestData> {
    if (!profileId) throw new Error(this.client.errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/skyblock/garden?profile=${profileId}`, options);
    if (res.options.raw) return res;
    return new SkyblockGarden(res.data);
  }
}

export default getSkyblockGarden;
