import SkyblockMemberRiftVillagePlazaCowboy from './SkyblockMemberRiftVillagePlazaCowboy.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { RiftVillagePlazaCowboyRabbit } from '../../../../../Types/Skyblock.js';

test('SkyblockMemberRiftVillagePlazaCowboy', () => {
  const data = new SkyblockMemberRiftVillagePlazaCowboy({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftVillagePlazaCowboy);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftVillagePlazaCowboy>();
  expect(data.stage).toBeDefined();
  expectTypeOf(data.stage).toEqualTypeOf<number>();
  expect(data.hayEaten).toBeDefined();
  expectTypeOf(data.hayEaten).toEqualTypeOf<number>();
  expect(data.rabbitName).toBeDefined();
  expectTypeOf(data.rabbitName).toEqualTypeOf<RiftVillagePlazaCowboyRabbit | 'UNKNOWN'>();
});
