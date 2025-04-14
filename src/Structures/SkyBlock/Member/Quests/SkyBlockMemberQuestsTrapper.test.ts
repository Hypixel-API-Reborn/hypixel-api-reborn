import SkyBlockMemberQuestsTrapper from './SkyBlockMemberQuestsTrapper.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberQuestsTrapper', () => {
  const data = new SkyBlockMemberQuestsTrapper({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberQuestsTrapper);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberQuestsTrapper>();
  expect(data.peltCount).toBeDefined();
  expectTypeOf(data.peltCount).toEqualTypeOf<number>();
  expect(data.lastCompletedTimestamp).toBeDefined();
  expectTypeOf(data.lastCompletedTimestamp).toEqualTypeOf<number>();
  expect(data.lastCompletedAt).toBeDefined();
  expectTypeOf(data.lastCompletedAt).toEqualTypeOf<Date>();
});
