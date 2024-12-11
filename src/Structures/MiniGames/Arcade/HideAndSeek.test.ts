import HideAndSeek from './HideAndSeek.js';
import PartyPooper from './PartyPooper.js';
import PropHunt from './PropHunt.js';
import { expect, expectTypeOf, test } from 'vitest';

test('HideAndSeek', () => {
  const data = new HideAndSeek({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(HideAndSeek);
  expectTypeOf(data).toEqualTypeOf<HideAndSeek>();
  expect(data.partyPooper).toBeDefined();
  expectTypeOf(data.partyPooper).toEqualTypeOf<PartyPooper>();
  expect(data.propHunt).toBeDefined();
  expectTypeOf(data.propHunt).toEqualTypeOf<PropHunt>();
  expect(data.winsAsSeeker).toBeDefined();
  expect(data.winsAsSeeker).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsSeeker).toEqualTypeOf<number>();
  expect(data.winsAsHider).toBeDefined();
  expect(data.winsAsHider).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsHider).toEqualTypeOf<number>();
});
