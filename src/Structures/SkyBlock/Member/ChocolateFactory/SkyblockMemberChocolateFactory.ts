import SkyblockMemberChocolateFactoryEggs from './SkyblockMemberChocolateFactoryEggs.js';
import SkyblockMemberChocolateFactoryEmployees from './SkyblockMemberChocolateFactoryEmployees.js';
import SkyblockMemberChocolateFactoryHitmen from './SkyblockMemberChocolateFactoryHitmen.js';
import SkyblockMemberChocolateFactoryTimeTower from './SkyblockMemberChocolateFactoryTimeTower.js';
import SkyblockMemberChocolateFactoryUpgrades from './SkyblockMemberChocolateFactoryUpgrades.js';
import type { SkyblockArea } from '../../../../Types/Skyblock.js';

class SkyblockMemberChocolateFactory {
  employees: SkyblockMemberChocolateFactoryEmployees;
  timeTower: SkyblockMemberChocolateFactoryTimeTower;
  upgrades: SkyblockMemberChocolateFactoryUpgrades;
  hitman: SkyblockMemberChocolateFactoryHitmen;
  currentChocolate: number;
  chocolateSincePrestige: number;
  totalChocolate: number;
  barnCapacity: number;
  prestige: number;
  lastViewedChocolateFactory: number;
  lastViewedChocolateFactoryDate: Date;
  supremeChocolateBars: number;
  eggs: SkyblockMemberChocolateFactoryEggs;
  foundRabbits: Record<string, number>;
  foundEggLocations: Record<keyof SkyblockArea, string[]>;
  constructor(data: Record<string, any>) {
    this.employees = new SkyblockMemberChocolateFactoryEmployees(data?.employees || {});
    this.timeTower = new SkyblockMemberChocolateFactoryTimeTower(data?.time_tower || {});
    this.upgrades = new SkyblockMemberChocolateFactoryUpgrades(data || {});
    this.hitman = new SkyblockMemberChocolateFactoryHitmen(data?.rabbit_hitmen || {});
    this.currentChocolate = data?.chocolate || 0;
    this.chocolateSincePrestige = data?.chocolate_since_prestige || 0;
    this.totalChocolate = data?.total_chocolate || 0;
    this.barnCapacity = data?.rabbit_barn_capacity_level || 0;
    this.prestige = data?.chocolate_level || 0;
    this.lastViewedChocolateFactory = data?.last_viewed_chocolate_factory || 0;
    this.lastViewedChocolateFactoryDate = new Date(this.lastViewedChocolateFactory);
    this.supremeChocolateBars = data?.supreme_chocolate_bars || 0;
    this.eggs = new SkyblockMemberChocolateFactoryEggs(data?.rabbits?.collected_eggs || {});
    this.foundRabbits = Object.keys(data?.rabbits || {})
      .filter((key) => 'collected_eggs' !== key && 'collected_locations' !== key)
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

export default SkyblockMemberChocolateFactory;
