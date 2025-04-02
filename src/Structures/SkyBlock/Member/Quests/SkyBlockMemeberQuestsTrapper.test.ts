import SkyBlockMemeberQuestsTrapper from './SkyBlockMemeberQuestsTrapper.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemeberQuestsTrapper', () => {
  const data = new SkyBlockMemeberQuestsTrapper({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemeberQuestsTrapper);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemeberQuestsTrapper>();
  expect(data.peltCount).toBeDefined();
  expectTypeOf(data.peltCount).toEqualTypeOf<number>();
  expect(data.lastCompletedTimestamp).toBeDefined();
  expectTypeOf(data.lastCompletedTimestamp).toEqualTypeOf<number>();
  expect(data.lastCompletedAt).toBeDefined();
  expectTypeOf(data.lastCompletedAt).toEqualTypeOf<Date>();
});
