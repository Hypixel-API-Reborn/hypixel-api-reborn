import PlayerRewardsMonthlyCrate from './PlayerRewardsMonthlyCrate.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerRewardsMonthlyCrate', () => {
  const data = new PlayerRewardsMonthlyCrate({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerRewardsMonthlyCrate);
  expectTypeOf(data).toEqualTypeOf<PlayerRewardsMonthlyCrate>();
  expect(data.date).toBeDefined();
  expect(data.date).toBe('meow');
  expectTypeOf(data.date).toEqualTypeOf<string>();
  expect(data.REGULAR).toBeDefined();
  expectTypeOf(data.REGULAR).toEqualTypeOf<boolean>();
  expect(data.VIP).toBeDefined();
  expectTypeOf(data.VIP).toEqualTypeOf<boolean>();
  expect(data.VIP_PLUS).toBeDefined();
  expectTypeOf(data.VIP_PLUS).toEqualTypeOf<boolean>();
  expect(data.MVP).toBeDefined();
  expectTypeOf(data.MVP).toEqualTypeOf<boolean>();
  expect(data.MVP_PLUS).toBeDefined();
  expectTypeOf(data.MVP_PLUS).toEqualTypeOf<boolean>();
});
