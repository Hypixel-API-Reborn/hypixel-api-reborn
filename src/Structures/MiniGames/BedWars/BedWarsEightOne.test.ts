import BedWarsEightOne from './BedWarsEightOne.ts';
import BedWarsMode from './BedWarsMode.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsEightOne', () => {
  const data = new BedWarsEightOne({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsEightOne);
  expectTypeOf(data).toEqualTypeOf<BedWarsEightOne>();
  expect(data.oneblock).toBeDefined();
  expect(data.oneblock).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.oneblock).toEqualTypeOf<BedWarsMode>();
  expect(data.rush).toBeDefined();
  expect(data.rush).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.rush).toEqualTypeOf<BedWarsMode>();
  expect(data.ultimate).toBeDefined();
  expect(data.ultimate).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.ultimate).toEqualTypeOf<BedWarsMode>();
});
