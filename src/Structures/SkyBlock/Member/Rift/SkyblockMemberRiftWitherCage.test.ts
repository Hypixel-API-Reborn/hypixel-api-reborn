import SkyblockMemberRiftWitherCage from './SkyblockMemberRiftWitherCage.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { WitherCageKilledEye } from '../../../../Types/Skyblock.js';

test('SkyblockMemberRiftWitherCage', () => {
  const data = new SkyblockMemberRiftWitherCage({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftWitherCage);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftWitherCage>();
  expect(data.killedEyes).toBeDefined();
  expectTypeOf(data.killedEyes).toEqualTypeOf<WitherCageKilledEye[]>();
});
