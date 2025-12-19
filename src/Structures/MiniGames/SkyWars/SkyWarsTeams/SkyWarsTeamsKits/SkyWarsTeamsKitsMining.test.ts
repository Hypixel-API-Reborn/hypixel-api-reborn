import SkyWarsMode from '../../SkyWarsMode/SkyWarsMode.js';
import SkyWarsTeamsKitsMining from './SkyWarsTeamsKitsMining.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsTeamsKitsMining', () => {
  const data = new SkyWarsTeamsKitsMining({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsTeamsKitsMining);
  expectTypeOf(data).toEqualTypeOf<SkyWarsTeamsKitsMining>();
  expect(data.default).toBeDefined();
  expect(data.default).toBeInstanceOf(SkyWarsMode);
  expectTypeOf(data.default).toEqualTypeOf<SkyWarsMode>();
  expect(data.cannoneer).toBeDefined();
  expect(data.cannoneer).toBeInstanceOf(SkyWarsMode);
  expectTypeOf(data.cannoneer).toEqualTypeOf<SkyWarsMode>();
  expect(data.speleologist).toBeDefined();
  expect(data.speleologist).toBeInstanceOf(SkyWarsMode);
  expectTypeOf(data.speleologist).toEqualTypeOf<SkyWarsMode>();
  expect(data.defaultTeams).toBeDefined();
  expect(data.defaultTeams).toBeInstanceOf(SkyWarsMode);
  expectTypeOf(data.defaultTeams).toEqualTypeOf<SkyWarsMode>();
});
