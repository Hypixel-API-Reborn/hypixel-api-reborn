import SkyBlockMemberRiftVillagePlazaCowboy from './SkyBlockMemberRiftVillagePlazaCowboy.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { RiftVillagePlazaCowboyRabbit } from '../../../../../Types/SkyBlock.js';

test('SkyBlockMemberRiftVillagePlazaCowboy', () => {
  const data = new SkyBlockMemberRiftVillagePlazaCowboy({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftVillagePlazaCowboy);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftVillagePlazaCowboy>();
  expect(data.stage).toBeDefined();
  expect(data.stage).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.stage).toEqualTypeOf<number>();
  expect(data.hayEaten).toBeDefined();
  expect(data.hayEaten).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hayEaten).toEqualTypeOf<number>();
  expect(data.rabbitName).toBeDefined();
  expectTypeOf(data.rabbitName).toEqualTypeOf<RiftVillagePlazaCowboyRabbit | 'UNKNOWN'>();
});
