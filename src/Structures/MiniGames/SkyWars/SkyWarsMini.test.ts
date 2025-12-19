import SkyWarsMini from './SkyWarsMini.js';
import SkyWarsMode from './SkyWarsMode/SkyWarsMode.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsMini', () => {
  const data = new SkyWarsMini({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsMini);
  expectTypeOf(data).toEqualTypeOf<SkyWarsMini>();
  expect(data.normal).toBeDefined();
  expect(data.normal).toBeInstanceOf(SkyWarsMode);
  expectTypeOf(data.normal).toEqualTypeOf<SkyWarsMode>();
});
