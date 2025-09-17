import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockElectionData from '../Structures/SkyBlock/Election/SkyBlockElectionData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockElection extends Endpoint {
  override async execute(options?: RequestOptions): Promise<SkyBlockElectionData | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/election', options);
    if (res.options.raw) return res;
    return new SkyBlockElectionData(res.data);
  }
}

export default getSkyBlockElection;
