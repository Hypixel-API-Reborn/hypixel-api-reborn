import BlockingDead from './BlockingDead.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BlockingDead', () => {
  const data = new BlockingDead({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BlockingDead);
  expectTypeOf(data).toEqualTypeOf<BlockingDead>();
  expect(data.headShots).toBeDefined();
  expect(data.headShots).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.headShots).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
