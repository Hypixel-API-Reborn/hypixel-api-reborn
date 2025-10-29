import MurderMysteryKnifeSkinPrestigeXp from './MurderMysteryKnifeSkinPrestigeXp.ts';
import type { MurderMysteryKnifeSkinRaw } from '../../../Types/Player.ts';

class MurderMysteryKnifeSkinPrestige {
  usePrestige: MurderMysteryKnifeSkinRaw[];
  xp: MurderMysteryKnifeSkinPrestigeXp;
  constructor(data: Record<string, any>) {
    this.usePrestige = data?.usePrestige || [];
    this.xp = new MurderMysteryKnifeSkinPrestigeXp(data?.xp || {});
  }
}

export default MurderMysteryKnifeSkinPrestige;
