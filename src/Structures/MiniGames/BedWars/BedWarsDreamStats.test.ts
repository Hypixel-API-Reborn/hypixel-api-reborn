import BedWarsDreamMode from './BedWarsDreamMode.js';
import BedWarsDreamStats from './BedWarsDreamStats.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsDreamStats', () => {
  const data = new BedWarsDreamStats({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsDreamStats);
  expectTypeOf(data).toEqualTypeOf<BedWarsDreamStats>();
  expect(data.ultimate).toBeDefined();
  expect(data.ultimate).toBeInstanceOf(BedWarsDreamMode);
  expectTypeOf(data.ultimate).toEqualTypeOf<BedWarsDreamMode>();
  expect(data.rush).toBeDefined();
  expect(data.rush).toBeInstanceOf(BedWarsDreamMode);
  expectTypeOf(data.rush).toEqualTypeOf<BedWarsDreamMode>();
  expect(data.armed).toBeDefined();
  expect(data.armed).toBeInstanceOf(BedWarsDreamMode);
  expectTypeOf(data.armed).toEqualTypeOf<BedWarsDreamMode>();
  expect(data.lucky).toBeDefined();
  expect(data.lucky).toBeInstanceOf(BedWarsDreamMode);
  expectTypeOf(data.lucky).toEqualTypeOf<BedWarsDreamMode>();
  expect(data.voidless).toBeDefined();
  expect(data.voidless).toBeInstanceOf(BedWarsDreamMode);
  expectTypeOf(data.voidless).toEqualTypeOf<BedWarsDreamMode>();
});
