import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockSkills from '../Structures/SkyBlock/Skills/SkyBlockSkills.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockSkills extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyBlockSkills | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/skills', options);
    if (res.options.raw) return res;
    return new SkyBlockSkills(res.data);
  }
}

export default getSkyBlockSkills;
