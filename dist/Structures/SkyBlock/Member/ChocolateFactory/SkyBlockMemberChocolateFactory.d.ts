import SkyBlockMemberChocolateFactoryEggs from './SkyBlockMemberChocolateFactoryEggs.js';
import SkyBlockMemberChocolateFactoryEmployees from './SkyBlockMemberChocolateFactoryEmployees.js';
import SkyBlockMemberChocolateFactoryHitmen from './SkyBlockMemberChocolateFactoryHitmen.js';
import SkyBlockMemberChocolateFactoryTimeTower from './SkyBlockMemberChocolateFactoryTimeTower.js';
import SkyBlockMemberChocolateFactoryUpgrades from './SkyBlockMemberChocolateFactoryUpgrades.js';
import type { SkyBlockArea } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberChocolateFactory {
    employees: SkyBlockMemberChocolateFactoryEmployees;
    timeTower: SkyBlockMemberChocolateFactoryTimeTower;
    upgrades: SkyBlockMemberChocolateFactoryUpgrades;
    hitman: SkyBlockMemberChocolateFactoryHitmen;
    currentChocolate: number;
    chocolateSincePrestige: number;
    totalChocolate: number;
    barnCapacity: number;
    prestige: number;
    lastViewedChocolateFactory: number;
    lastViewedChocolateFactoryDate: Date;
    supremeChocolateBars: number;
    eggs: SkyBlockMemberChocolateFactoryEggs;
    foundRabbits: Record<string, number>;
    foundEggLocations: Record<keyof SkyBlockArea, string[]>;
    constructor(data: Record<string, any>);
    toString(): number;
}
export default SkyBlockMemberChocolateFactory;
//# sourceMappingURL=SkyBlockMemberChocolateFactory.d.ts.map