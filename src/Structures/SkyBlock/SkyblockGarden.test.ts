import SkyblockGarden from './SkyblockGarden.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  SkillLevel,
  SkyblockGardenComposter,
  SkyblockGardenCropMilestones,
  SkyblockGardenVisitor,
  SkyblockGarenCrops
} from '../../Types/Skyblock.js';

test('SkyblockGarden', () => {
  const data = new SkyblockGarden({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGarden);
  expectTypeOf(data).toEqualTypeOf<SkyblockGarden>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<SkillLevel>();
  expect(data.barnSkin).toBeDefined();
  expectTypeOf(data.barnSkin).toEqualTypeOf<string>();
  expect(data.unlockedPlots).toBeDefined();
  expectTypeOf(data.unlockedPlots).toEqualTypeOf<string[]>();
  expect(data.visitors).toBeDefined();
  expectTypeOf(data.visitors).toEqualTypeOf<SkyblockGardenVisitor>();
  expect(data.cropMilestones).toBeDefined();
  expectTypeOf(data.cropMilestones).toEqualTypeOf<SkyblockGardenCropMilestones>();
  expect(data.composter).toBeDefined();
  expectTypeOf(data.composter).toEqualTypeOf<SkyblockGardenComposter>();
  expect(data.cropUpgrades).toBeDefined();
  expectTypeOf(data.cropUpgrades).toEqualTypeOf<SkyblockGarenCrops>();
});
