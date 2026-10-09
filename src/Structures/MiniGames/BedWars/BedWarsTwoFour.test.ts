import BedWarsMode from './BedWarsMode.ts';
import BedWarsTwoFour from './BedWarsTwoFour.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsTwoFour', () => {
  const data = new BedWarsTwoFour({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsTwoFour);
  expectTypeOf(data).toEqualTypeOf<BedWarsTwoFour>();
  expect(data.tourney).toBeDefined();
  expect(data.tourney).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.tourney).toEqualTypeOf<BedWarsMode>();
});
