import SkyWarsModePerk from './SkyWarsModePerk.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsModePerk', () => {
  const data = new SkyWarsModePerk({ stats: 'meow' }, 'annoy', 'crazytourney');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsModePerk);
  expectTypeOf(data).toEqualTypeOf<SkyWarsModePerk>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.enabled).toBeDefined();
  expectTypeOf(data.enabled).toEqualTypeOf<boolean>();
});
