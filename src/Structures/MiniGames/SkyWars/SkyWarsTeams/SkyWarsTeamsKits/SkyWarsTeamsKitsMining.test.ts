import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.js';
import SkyWarsTeamsKitsMining from './SkyWarsTeamsKitsMining.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsTeamsKitsMining', () => {
  const data = new SkyWarsTeamsKitsMining({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsTeamsKitsMining);
  expectTypeOf(data).toEqualTypeOf<SkyWarsTeamsKitsMining>();
  expect(data.default).toBeDefined();
  expect(data.default).toBeInstanceOf(BaseSkyWarsMode);
  expectTypeOf(data.default).toEqualTypeOf<BaseSkyWarsMode>();
  expect(data.cannoneer).toBeDefined();
  expect(data.cannoneer).toBeInstanceOf(BaseSkyWarsMode);
  expectTypeOf(data.cannoneer).toEqualTypeOf<BaseSkyWarsMode>();
  expect(data.speleologist).toBeDefined();
  expect(data.speleologist).toBeInstanceOf(BaseSkyWarsMode);
  expectTypeOf(data.speleologist).toEqualTypeOf<BaseSkyWarsMode>();
  expect(data.defaultTeams).toBeDefined();
  expect(data.defaultTeams).toBeInstanceOf(BaseSkyWarsMode);
  expectTypeOf(data.defaultTeams).toEqualTypeOf<BaseSkyWarsMode>();
});
