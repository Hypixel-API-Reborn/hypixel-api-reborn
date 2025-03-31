import SkyblockMemeberQuestsTrapper from './SkyblockMemeberQuestsTrapper.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemeberQuestsTrapper', () => {
  const data = new SkyblockMemeberQuestsTrapper({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemeberQuestsTrapper);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemeberQuestsTrapper>();
  expect(data.peltCount).toBeDefined();
  expectTypeOf(data.peltCount).toEqualTypeOf<number>();
  expect(data.lastCompletedTimestamp).toBeDefined();
  expectTypeOf(data.lastCompletedTimestamp).toEqualTypeOf<number>();
  expect(data.lastCompletedAt).toBeDefined();
  expectTypeOf(data.lastCompletedAt).toEqualTypeOf<Date>();
});
