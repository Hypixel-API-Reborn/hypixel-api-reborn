import InventoryLayout from '../../Shared/InventoryLayout.js';
class SheepWarsLayout {
    opened;
    layout;
    constructor(data) {
        this.opened = data?.opened || true;
        this.layout = new InventoryLayout(data?.slot || {});
    }
}
export default SheepWarsLayout;
//# sourceMappingURL=SheepWarsLayout.js.map