import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Quests from '../Structures/Static/Quests.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getQuests extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<Quests | RequestData> {
    const res = await this.client.requestHandler.request('/resources/quests', options);
    if (res.options.raw) return res;
    return new Quests(res.data);
  }
}

export default getQuests;
