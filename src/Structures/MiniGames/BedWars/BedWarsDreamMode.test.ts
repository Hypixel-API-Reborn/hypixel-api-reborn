import BedWarsDreamMode from './BedWarsDreamMode.js';
import BedWarsMode from './BedWarsMode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsDreamMode', () => {
  const data = new BedWarsDreamMode({ stats: 'meow' }, 'armed');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsDreamMode);
  expectTypeOf(data).toEqualTypeOf<BedWarsDreamMode>();
  expect(data.doubles).toBeDefined();
  expect(data.doubles).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.doubles).toEqualTypeOf<BedWarsMode>();
  expect(data.fours).toBeDefined();
  expect(data.fours).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.fours).toEqualTypeOf<BedWarsMode>();
});
