import SkyBlockGardenActiveVisitor from './SkyBlockGardenActiveVisitor.js';
import SkyBlockGardenActiveVisitorRequirement from './SkyBlockGardenActiveVisitorRequirement.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { VisitorStatus } from '../../../Types/SkyBlock.js';

test('SkyBlockGardenActiveVisitor', () => {
  const data = new SkyBlockGardenActiveVisitor({ stats: 'meow' }, 'mrrp');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockGardenActiveVisitor);
  expectTypeOf(data).toEqualTypeOf<SkyBlockGardenActiveVisitor>();
  expect(data.visitor).toBeDefined();
  expectTypeOf(data.visitor).toEqualTypeOf<string>();
  expect(data.requirements).toBeDefined();
  expectTypeOf(data.requirements).toEqualTypeOf<SkyBlockGardenActiveVisitorRequirement[]>();
  expect(data.status).toBeDefined();
  expectTypeOf(data.status).toEqualTypeOf<VisitorStatus | 'UNKNOWN'>();
  expect(data.position).toBeDefined();
  expect(data.position).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.position).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.visitor);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
