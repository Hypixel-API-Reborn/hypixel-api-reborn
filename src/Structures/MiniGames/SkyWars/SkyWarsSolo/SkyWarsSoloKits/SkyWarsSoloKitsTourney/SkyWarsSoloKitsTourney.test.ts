import BaseSkyWarsMode from '../../../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsSoloKitsTourney from './SkyWarsSoloKitsTourney.ts';
import SkyWarsSoloKitsTourneyAdvanced from './SkyWarsSoloKitsTourneyAdvanced.ts';
import SkyWarsSoloKitsTourneyBasic from './SkyWarsSoloKitsTourneyBasic.ts';
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
  expect(data.enderChest).toBeInstanceOf(BaseSkyWarsMode);
  expectTypeOf(data.enderChest).toEqualTypeOf<BaseSkyWarsMode>();
});
