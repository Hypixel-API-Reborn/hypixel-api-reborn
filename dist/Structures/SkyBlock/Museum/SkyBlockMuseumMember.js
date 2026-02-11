import SkyBlockMuseumItem from './SkyBlockMuseumItem.js';
import { decode } from '../../../Utils/SkyBlockUtils.js';
class SkyBlockMuseumMember {
    value;
    appraisal;
    rawItems;
    getItems;
    constructor(data) {
        this.value = data?.value || 0;
        this.appraisal = data?.appraisal || false;
        this.rawItems = data?.items || {};
        this.getItems = async () => {
            const items = [];
            for (const item of Object.keys(data?.items || {})) {
                items.push(new SkyBlockMuseumItem(item, data?.items?.[item] || {}, await decode((data?.items?.[item] || {})?.data)));
            }
            return items;
        };
    }
}
export default SkyBlockMuseumMember;
//# sourceMappingURL=SkyBlockMuseumMember.js.map