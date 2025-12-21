import SkyWarsMode from './SkyWarsMode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsMode', () => {
  const data = new SkyWarsMode({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsMode);
  expectTypeOf(data).toEqualTypeOf<SkyWarsMode>();
  expect(data.activeKit).toBeDefined();
  expectTypeOf(data.activeKit).toEqualTypeOf<string | 'UNKNOWN'>();
});
