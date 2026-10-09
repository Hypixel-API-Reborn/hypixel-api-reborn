import InventoryLayout from '../../Shared/InventoryLayout.ts';

class SheepWarsLayout {
  opened: boolean;
  layout: InventoryLayout;
  constructor(data: Record<string, any>) {
    this.opened = data?.opened ?? true;
    this.layout = new InventoryLayout(data?.slot ?? {});
  }
}

export default SheepWarsLayout;
