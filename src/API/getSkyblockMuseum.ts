import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockMuseum from '../Structures/SkyBlock/SkyblockMuseum.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockMuseum extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, profileId: string, options?: RequestOptions): Promise<SkyblockMuseum | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(
      `/skyblock/museum?uuid=${query}&profile=${profileId}`,
      options
    );
    if (res.options.raw) return res;
    return new SkyblockMuseum({ uuid: query, m: res.data, profileId: profileId });
  }
}

export default getSkyblockMuseum;
