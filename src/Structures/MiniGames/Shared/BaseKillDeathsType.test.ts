import BaseKillDeathsType from './BaseKillDeathsType.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('BaseKillDeathsType', () => {
  const data = new BaseKillDeathsType({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BaseKillDeathsType);
  expectTypeOf(data).toEqualTypeOf<BaseKillDeathsType>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.ratio).toBeDefined();
  expect(data.ratio).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.ratio).toEqualTypeOf<number>();
});
