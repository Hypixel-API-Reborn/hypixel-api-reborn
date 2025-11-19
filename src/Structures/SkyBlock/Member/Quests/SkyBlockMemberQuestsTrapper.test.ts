import SkyBlockMemberQuestsTrapper from './SkyBlockMemberQuestsTrapper.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberQuestsTrapper', () => {
  const data = new SkyBlockMemberQuestsTrapper({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberQuestsTrapper);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberQuestsTrapper>();
  expect(data.peltCount).toBeDefined();
  expect(data.peltCount).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.peltCount).toEqualTypeOf<number>();
  expect(data.lastCompletedTimestamp).toBeDefined();
  expect(data.lastCompletedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastCompletedTimestamp).toEqualTypeOf<number>();
  expect(data.lastCompletedAt).toBeDefined();
  expect(data.lastCompletedAt).toBeInstanceOf(Date);
  expectTypeOf(data.lastCompletedAt).toEqualTypeOf<Date>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.peltCount);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
