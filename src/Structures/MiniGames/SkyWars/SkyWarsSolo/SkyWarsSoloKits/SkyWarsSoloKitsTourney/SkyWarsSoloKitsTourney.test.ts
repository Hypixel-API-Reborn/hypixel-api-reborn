import SkyWarsMode from '../../../SkyWarsMode/SkyWarsMode.js';
import SkyWarsSoloKitsTourney from './SkyWarsSoloKitsTourney.js';
import SkyWarsSoloKitsTourneyAdvanced from './SkyWarsSoloKitsTourneyAdvanced.js';
import SkyWarsSoloKitsTourneyBasic from './SkyWarsSoloKitsTourneyBasic.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsSoloKitsTourney', () => {
  const data = new SkyWarsSoloKitsTourney({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsSoloKitsTourney);
  expectTypeOf(data).toEqualTypeOf<SkyWarsSoloKitsTourney>();
  expect(data.basic).toBeDefined();
  expect(data.basic).toBeInstanceOf(SkyWarsSoloKitsTourneyBasic);
  expectTypeOf(data.basic).toEqualTypeOf<SkyWarsSoloKitsTourneyBasic>();
  expect(data.advanced).toBeDefined();
  expect(data.advanced).toBeInstanceOf(SkyWarsSoloKitsTourneyAdvanced);
  expectTypeOf(data.advanced).toEqualTypeOf<SkyWarsSoloKitsTourneyAdvanced>();
  expect(data.enderChest).toBeDefined();
  expect(data.enderChest).toBeInstanceOf(SkyWarsMode);
  expectTypeOf(data.enderChest).toEqualTypeOf<SkyWarsMode>();
});
