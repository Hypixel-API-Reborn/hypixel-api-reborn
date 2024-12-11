import { RemoveSnakeCaseString } from '../../../Utils/RemoveSnakeCase.js';
import type { SkyWarsKitNames } from '../../../Types/Player.js';

class SkyWarsKit {
  kitData: string[];
  isKit: boolean;
  gameMode: string;
  kitType: string;
  kitName: SkyWarsKitNames;
  constructor(kit: Record<string, any>) {
    this.kitData = kit?.match(/^kit_([a-z]+)_([a-z]+)_([a-z]+)$/);
    this.isKit = Boolean(this.kitData);
    this.gameMode = this.kitData ? this.kitData?.[2] || '' : '';
    this.kitType = this.kitData ? this.kitData?.[1] || '' : '';
    this.kitName = RemoveSnakeCaseString(this.kitData ? this.kitData?.[3] || '' : '') as SkyWarsKitNames;
  }
}

export default SkyWarsKit;
