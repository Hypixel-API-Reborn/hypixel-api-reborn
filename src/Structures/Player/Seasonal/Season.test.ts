import Season from './Season.js';
import SeasonYear from './SeasonYear.js';
import { SeasonName } from '../../../Types/Player.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Season', () => {
  const data = new Season({ stats: 'meow' }, 'anniversary');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Season);
  expectTypeOf(data).toEqualTypeOf<Season>();
  expect(data.season).toBeDefined();
  expectTypeOf(data.season).toEqualTypeOf<SeasonName>();
  expect(data.years).toBeDefined();
  expectTypeOf(data.years).toEqualTypeOf<SeasonYear[]>();
});
