import SkyBlockGarden from './SkyBlockGarden.js';
import SkyBlockGardenActiveVisitor from './SkyBlockGardenActiveVisitor.js';
import SkyBlockGardenComposter from './SkyBlockGardenComposter.js';
import SkyBlockGardenCropMilestones from './SkyBlockGardenCropMilestones.js';
import SkyBlockGardenCropsUpgrades from './SkyBlockGardenCropsUpgrades.js';
import SkyBlockGardenVisitors from './SkyBlockGardenVisitors.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BarnPlot, BarnSkin, SkillLevelData } from '../../../Types/SkyBlock.js';

test('SkyBlockGarden', () => {
  const data = new SkyBlockGarden({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockGarden);
  expectTypeOf(data).toEqualTypeOf<SkyBlockGarden>();
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
  expectTypeOf(data.visitors).toEqualTypeOf<SkyBlockGardenVisitors>();
  expect(data.currentVisitors).toBeDefined();
  expectTypeOf(data.currentVisitors).toEqualTypeOf<SkyBlockGardenActiveVisitor[]>();
  expect(data.cropMilestones).toBeDefined();
  expectTypeOf(data.cropMilestones).toEqualTypeOf<SkyBlockGardenCropMilestones>();
  expect(data.composter).toBeDefined();
  expectTypeOf(data.composter).toEqualTypeOf<SkyBlockGardenComposter>();
  expect(data.cropUpgrades).toBeDefined();
  expectTypeOf(data.cropUpgrades).toEqualTypeOf<SkyBlockGardenCropsUpgrades>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.level.level);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
