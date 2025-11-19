import OneInTheQuiver from './OneInTheQuiver.js';
import { expect, expectTypeOf, test } from 'vitest';

test('OneInTheQuiver', () => {
  const data = new OneInTheQuiver({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(OneInTheQuiver);
  expectTypeOf(data).toEqualTypeOf<OneInTheQuiver>();
  expect(data.bountyKills).toBeDefined();
  expect(data.bountyKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bountyKills).toEqualTypeOf<number>();
  expect(data.bowKills).toBeDefined();
  expect(data.bowKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bowKills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.swordKills).toBeDefined();
  expect(data.swordKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.swordKills).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
