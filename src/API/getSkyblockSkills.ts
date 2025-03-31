import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockSkills from '../Structures/SkyBlock/Skills/SkyblockSkills.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockSkills extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyblockSkills | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/skills', options);
    if (res.options.raw) return res;
    return new SkyblockSkills(res.data);
  }
}

export default getSkyblockSkills;
