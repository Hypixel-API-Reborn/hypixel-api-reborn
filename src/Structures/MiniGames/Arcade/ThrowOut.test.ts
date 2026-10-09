import ThrowOut from './ThrowOut.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { ArcadeThrowOutDisguise } from '../../../Types/index.ts';

test('ThrowOut', () => {
  const data = new ThrowOut({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(ThrowOut);
  expectTypeOf(data).toEqualTypeOf<ThrowOut>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.disguise).toBeDefined();
  expectTypeOf(data.disguise).toEqualTypeOf<ArcadeThrowOutDisguise | 'UNKNOWN'>();
});
