import PlayerScorpiusBribe from './PlayerScorpiusBribe.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerScorpiusBribe', () => {
  const data = new PlayerScorpiusBribe(0, '2000');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerScorpiusBribe);
  expectTypeOf(data).toEqualTypeOf<PlayerScorpiusBribe>();
  expect(data.year).toBeDefined();
  expect(data.year).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.year).toEqualTypeOf<number>();
  expect(data.claimedTimestamp).toBeDefined();
  expect(data.claimedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.claimedTimestamp).toEqualTypeOf<number>();
  expect(data.claimedAt).toBeDefined();
  expectTypeOf(data.claimedAt).toEqualTypeOf<Date>();
});
