import BedWarsFourThree from './BedWarsFourThree.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsFourThree', () => {
  const data = new BedWarsFourThree({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsFourThree);
  expectTypeOf(data).toEqualTypeOf<BedWarsFourThree>();
});
