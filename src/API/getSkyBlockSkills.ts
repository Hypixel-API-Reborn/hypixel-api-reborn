import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockSkills from '../Structures/SkyBlock/Skills/SkyBlockSkills.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockSkills extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<SkyBlockSkills>> {
    const res = await this.client.requestHandler.request('/resources/skyblock/skills', options);
    return new RequestData<SkyBlockSkills>(new SkyBlockSkills(res.rawData), res);
  }
}

export default getSkyBlockSkills;
