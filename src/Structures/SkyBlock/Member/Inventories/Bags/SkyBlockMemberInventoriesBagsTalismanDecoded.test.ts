import SkyBlockMemberInventoriesBagsTalismanDecoded from './SkyBlockMemberInventoriesBagsTalismanDecoded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesBagsTalismanDecoded', () => {
  const data = new SkyBlockMemberInventoriesBagsTalismanDecoded([]);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesBagsTalismanDecoded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesBagsTalismanDecoded>();
  expect(data.magicalPower).toBeDefined();
  expect(data.magicalPower).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.magicalPower).toEqualTypeOf<number>();
});
