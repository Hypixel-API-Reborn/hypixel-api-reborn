import SkyBlockMemberChocolateFactoryEggs from './SkyBlockMemberChocolateFactoryEggs.js';
import SkyBlockMemberChocolateFactoryEmployees from './SkyBlockMemberChocolateFactoryEmployees.js';
import SkyBlockMemberChocolateFactoryHitmen from './SkyBlockMemberChocolateFactoryHitmen.js';
import SkyBlockMemberChocolateFactoryTimeTower from './SkyBlockMemberChocolateFactoryTimeTower.js';
import SkyBlockMemberChocolateFactoryUpgrades from './SkyBlockMemberChocolateFactoryUpgrades.js';
import type { SkyBlockArea } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberChocolateFactory {
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
  constructor(data: Record<string, any>) {
    this.employees = new SkyBlockMemberChocolateFactoryEmployees(data?.employees || {});
    this.timeTower = new SkyBlockMemberChocolateFactoryTimeTower(data?.time_tower || {});
    this.upgrades = new SkyBlockMemberChocolateFactoryUpgrades(data || {});
    this.hitman = new SkyBlockMemberChocolateFactoryHitmen(data?.rabbit_hitmen || {});
    this.currentChocolate = data?.chocolate || 0;
    this.chocolateSincePrestige = data?.chocolate_since_prestige || 0;
    this.totalChocolate = data?.total_chocolate || 0;
    this.barnCapacity = data?.rabbit_barn_capacity_level || 0;
    this.prestige = data?.chocolate_level || 0;
    this.lastViewedChocolateFactory = data?.last_viewed_chocolate_factory || 0;
    this.lastViewedChocolateFactoryDate = new Date(this.lastViewedChocolateFactory);
    this.supremeChocolateBars = data?.supreme_chocolate_bars || 0;
    this.eggs = new SkyBlockMemberChocolateFactoryEggs(data?.rabbits?.collected_eggs || {});
    this.foundRabbits = Object.keys(data?.rabbits || {})
      .filter((key) => key !== 'collected_eggs' && key !== 'collected_locations')
      .reduce((obj: Record<string, number>, key: string) => {
        obj[key] = data.rabbits[key];
        return obj;
      }, {});
    this.foundEggLocations = data?.rabbits?.collected_locations || {};
  }

  toString(): number {
    return this.currentChocolate;
  }
}

export default SkyBlockMemberChocolateFactory;
