import MurderMysteryDescentItem from './MurderMysteryDescentItem.js';
import { expect, expectTypeOf, test } from 'vitest';

test('MurderMysteryDescentItem', () => {
  const data = new MurderMysteryDescentItem({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(MurderMysteryDescentItem);
  expectTypeOf(data).toEqualTypeOf<MurderMysteryDescentItem>();
  expect(data.claimed).toBeDefined();
  expectTypeOf(data.claimed).toEqualTypeOf<boolean>();
  expect(data.progress).toBeDefined();
  expect(data.progress).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.progress).toEqualTypeOf<number>();
});
