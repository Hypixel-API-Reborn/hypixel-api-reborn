import SkyBlockMemberObjectives from './SkyBlockMemberObjectives.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { RawSkyBlockObjective } from '../../../Types/SkyBlock.js';

test('SkyBlockMemberObjectives', () => {
  const data = new SkyBlockMemberObjectives({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberObjectives);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberObjectives>();
  expect(data.objectives).toBeDefined();
  expectTypeOf(data.objectives).toEqualTypeOf<Record<string, RawSkyBlockObjective>>();
  expect(data.tutorial).toBeDefined();
  expectTypeOf(data.tutorial).toEqualTypeOf<string[]>();
});
