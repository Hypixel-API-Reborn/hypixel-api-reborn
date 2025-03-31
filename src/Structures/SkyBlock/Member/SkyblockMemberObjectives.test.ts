import SkyblockMemberObjectives from './SkyblockMemberObjectives.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { RawSkyblockObjective } from '../../../Types/Skyblock.js';

test('SkyblockMemberObjectives', () => {
  const data = new SkyblockMemberObjectives({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberObjectives);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberObjectives>();
  expect(data.objectives).toBeDefined();
  expectTypeOf(data.objectives).toEqualTypeOf<Record<string, RawSkyblockObjective>>();
  expect(data.tutorial).toBeDefined();
  expectTypeOf(data.tutorial).toEqualTypeOf<string[]>();
});
