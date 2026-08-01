import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockElectionData from '../Structures/SkyBlock/Election/SkyBlockElectionData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockElection extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<SkyBlockElectionData>> {
    const res = await this.client.requestHandler.request('/resources/skyblock/election', options);
    return new RequestData<SkyBlockElectionData>(new SkyBlockElectionData(res.rawData), res);
  }
}

export default getSkyBlockElection;
