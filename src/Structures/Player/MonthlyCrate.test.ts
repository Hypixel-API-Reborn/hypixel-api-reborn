import MonthlyCrate from './MonthlyCrate.js';
import { expect, expectTypeOf, test } from 'vitest';

test('MonthlyCrate', () => {
  const data = new MonthlyCrate({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(MonthlyCrate);
  expectTypeOf(data).toEqualTypeOf<MonthlyCrate>();
  expect(data.date).toBeDefined();
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
