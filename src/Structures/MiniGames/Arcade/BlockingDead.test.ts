import BlockingDead from './BlockingDead.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BlockingDead', () => {
  const data = new BlockingDead({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BlockingDead);
  expectTypeOf(data).toEqualTypeOf<BlockingDead>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.headshots).toBeDefined();
  expect(data.headshots).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.headshots).toEqualTypeOf<number>();
});
