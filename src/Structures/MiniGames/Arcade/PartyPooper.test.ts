import PartyPooper from './PartyPooper.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PartyPooper', () => {
  const data = new PartyPooper({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PartyPooper);
  expectTypeOf(data).toEqualTypeOf<PartyPooper>();
  expect(data.winsAsSeeker).toBeDefined();
  expect(data.winsAsSeeker).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsSeeker).toEqualTypeOf<number>();
  expect(data.winsAsHider).toBeDefined();
  expect(data.winsAsHider).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsHider).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
