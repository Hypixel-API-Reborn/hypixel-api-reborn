import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockSkills from '../Structures/SkyBlock/Skills/SkyBlockSkills.js';
class getSkyBlockSkills extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/resources/skyblock/skills', options);
        if (res.options.raw)
            return res;
        return new SkyBlockSkills(res.data);
    }
}
export default getSkyBlockSkills;
//# sourceMappingURL=getSkyBlockSkills.js.map