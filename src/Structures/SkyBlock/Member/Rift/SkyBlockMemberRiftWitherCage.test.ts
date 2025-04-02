import SkyBlockMemberRiftWitherCage from './SkyBlockMemberRiftWitherCage.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { WitherCageKilledEye } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberRiftWitherCage', () => {
  const data = new SkyBlockMemberRiftWitherCage({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWitherCage);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWitherCage>();
  expect(data.killedEyes).toBeDefined();
  expectTypeOf(data.killedEyes).toEqualTypeOf<WitherCageKilledEye[]>();
});
