import BaseSkyWarsMode from '../../../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsSoloKitsLab from './SkyWarsSoloKitsLab.ts';
import SkyWarsSoloKitsLabAdvanced from './SkyWarsSoloKitsLabAdvanced.ts';
import SkyWarsSoloKitsLabBasic from './SkyWarsSoloKitsLabBasic.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsSoloKitsLab', () => {
  const data = new SkyWarsSoloKitsLab({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsSoloKitsLab);
  expectTypeOf(data).toEqualTypeOf<SkyWarsSoloKitsLab>();
  expect(data.basic).toBeDefined();
  expect(data.basic).toBeInstanceOf(SkyWarsSoloKitsLabBasic);
  expectTypeOf(data.basic).toEqualTypeOf<SkyWarsSoloKitsLabBasic>();
  expect(data.advanced).toBeDefined();
  expect(data.advanced).toBeInstanceOf(SkyWarsSoloKitsLabAdvanced);
  expectTypeOf(data.advanced).toEqualTypeOf<SkyWarsSoloKitsLabAdvanced>();
  expect(data.enderChest).toBeDefined();
  expect(data.enderChest).toBeInstanceOf(BaseSkyWarsMode);
  expectTypeOf(data.enderChest).toEqualTypeOf<BaseSkyWarsMode>();
});
