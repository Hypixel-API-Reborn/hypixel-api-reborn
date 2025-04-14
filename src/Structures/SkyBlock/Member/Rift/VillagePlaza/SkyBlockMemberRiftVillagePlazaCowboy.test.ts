import SkyBlockMemberRiftVillagePlazaCowboy from './SkyBlockMemberRiftVillagePlazaCowboy.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { RiftVillagePlazaCowboyRabbit } from '../../../../../Types/SkyBlock.js';

test('SkyBlockMemberRiftVillagePlazaCowboy', () => {
  const data = new SkyBlockMemberRiftVillagePlazaCowboy({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftVillagePlazaCowboy);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftVillagePlazaCowboy>();
  expect(data.stage).toBeDefined();
  expectTypeOf(data.stage).toEqualTypeOf<number>();
  expect(data.hayEaten).toBeDefined();
  expectTypeOf(data.hayEaten).toEqualTypeOf<number>();
  expect(data.rabbitName).toBeDefined();
  expectTypeOf(data.rabbitName).toEqualTypeOf<RiftVillagePlazaCowboyRabbit | 'UNKNOWN'>();
});
