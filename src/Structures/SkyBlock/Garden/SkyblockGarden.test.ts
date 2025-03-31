import SkyblockGarden from './SkyblockGarden.js';
import SkyblockGardenActiveVisitor from './SkyblockGardenActiveVisitor.js';
import SkyblockGardenComposter from './SkyblockGardenComposter.js';
import SkyblockGardenCropMilestones from './SkyblockGardenCropMilestones.js';
import SkyblockGardenCropsUpgrades from './SkyblockGardenCropsUpgrades.js';
import SkyblockGardenVisitors from './SkyblockGardenVisitors.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BarnPlot, BarnSkin, SkillLevelData } from '../../../Types/Skyblock.js';

test('SkyblockGarden', () => {
  const data = new SkyblockGarden({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGarden);
  expectTypeOf(data).toEqualTypeOf<SkyblockGarden>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<SkillLevelData>();
  expect(data.barnSkin).toBeDefined();
  expectTypeOf(data.barnSkin).toEqualTypeOf<BarnSkin>();
  expect(data.unlockedBarnSkins).toBeDefined();
  expectTypeOf(data.unlockedBarnSkins).toEqualTypeOf<BarnSkin[]>();
  data.unlockedBarnSkins.forEach((unlockedSkin) => {
    expect(unlockedSkin).toBeDefined();
    expectTypeOf(unlockedSkin).toEqualTypeOf<BarnSkin>();
  });
  expect(data.unlockedPlots).toBeDefined();
  expectTypeOf(data.unlockedPlots).toEqualTypeOf<BarnPlot[]>();
  data.unlockedPlots.forEach((unlockedPlot) => {
    expect(unlockedPlot).toBeDefined();
    expectTypeOf(unlockedPlot).toEqualTypeOf<BarnPlot>();
  });
  expect(data.visitors).toBeDefined();
  expectTypeOf(data.visitors).toEqualTypeOf<SkyblockGardenVisitors>();
  expect(data.currentVisitors).toBeDefined();
  expectTypeOf(data.currentVisitors).toEqualTypeOf<SkyblockGardenActiveVisitor[]>();
  expect(data.cropMilestones).toBeDefined();
  expectTypeOf(data.cropMilestones).toEqualTypeOf<SkyblockGardenCropMilestones>();
  expect(data.composter).toBeDefined();
  expectTypeOf(data.composter).toEqualTypeOf<SkyblockGardenComposter>();
  expect(data.cropUpgrades).toBeDefined();
  expectTypeOf(data.cropUpgrades).toEqualTypeOf<SkyblockGardenCropsUpgrades>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.level.level);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
