import Client from '../Client.js';
import RequestData from '../Private/RequestData.js';
import SkyblockItem from '../Structures/SkyBlock/SkyblockItem.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockItems (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getSkyblockItems({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<SkyblockItem[] | RequestData>();
  client.destroy();
});

test('getSkyblockItems', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getSkyblockItems();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockItem[] | RequestData>();
  data = data as SkyblockItem[];
  data.forEach((item: SkyblockItem) => {
    expect(item.durability).toBeDefined();
    expectTypeOf(item.durability).toEqualTypeOf<number | undefined>();

    expect(item.museum_data).toBeDefined();
    expectTypeOf(item.museum_data).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.has_uuid).toBeDefined();
    expectTypeOf(item.has_uuid).toEqualTypeOf<boolean | string | undefined>();

    expect(item.gemstone_slots).toBeDefined();
    expectTypeOf(item.gemstone_slots).toEqualTypeOf<Record<string, any>[] | undefined>();

    expect(item.glowing).toBeDefined();
    expectTypeOf(item.glowing).toEqualTypeOf<boolean | undefined>();

    expect(item.can_auction).toBeDefined();
    expectTypeOf(item.can_auction).toEqualTypeOf<boolean | undefined>();

    expect(item.can_trade).toBeDefined();
    expectTypeOf(item.can_trade).toEqualTypeOf<boolean | undefined>();

    expect(item.requirements).toBeDefined();
    expectTypeOf(item.requirements).toEqualTypeOf<Record<string, any>[] | undefined>();

    expect(item.can_place).toBeDefined();
    expectTypeOf(item.can_place).toEqualTypeOf<boolean | undefined>();

    expect(item.museum).toBeDefined();
    expectTypeOf(item.museum).toEqualTypeOf<boolean | undefined>();

    expect(item.generator).toBeDefined();
    expectTypeOf(item.generator).toEqualTypeOf<string | undefined>();

    expect(item.generator_tier).toBeDefined();
    expectTypeOf(item.generator_tier).toEqualTypeOf<number | undefined>();

    expect(item.furniture).toBeDefined();
    expectTypeOf(item.furniture).toEqualTypeOf<string | undefined>();

    expect(item.item_specific).toBeDefined();
    expectTypeOf(item.item_specific).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.description).toBeDefined();
    expectTypeOf(item.description).toEqualTypeOf<string | undefined>();

    expect(item.upgrade_costs).toBeDefined();
    expectTypeOf(item.upgrade_costs).toEqualTypeOf<Array<Array<Record<string, any>>> | undefined>();

    expect(item.gear_score).toBeDefined();
    expectTypeOf(item.gear_score).toEqualTypeOf<number | undefined>();

    expect(item.dungeon_item).toBeDefined();
    expectTypeOf(item.dungeon_item).toEqualTypeOf<boolean | undefined>();

    expect(item.dungeon_item_conversion_cost).toBeDefined();
    expectTypeOf(item.dungeon_item_conversion_cost).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.catacombs_requirements).toBeDefined();
    expectTypeOf(item.catacombs_requirements).toEqualTypeOf<Record<string, any>[] | undefined>();

    expect(item.can_have_attributes).toBeDefined();
    expectTypeOf(item.can_have_attributes).toEqualTypeOf<boolean | undefined>();

    expect(item.salvageable_from_recipe).toBeDefined();
    expectTypeOf(item.salvageable_from_recipe).toEqualTypeOf<boolean | undefined>();

    expect(item.can_recombobulate).toBeDefined();
    expectTypeOf(item.can_recombobulate).toEqualTypeOf<boolean | undefined>();

    expect(item.enchantments).toBeDefined();
    expectTypeOf(item.enchantments).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.rift_transferrable).toBeDefined();
    expectTypeOf(item.rift_transferrable).toEqualTypeOf<boolean | undefined>();

    expect(item.origin).toBeDefined();
    expectTypeOf(item.origin).toEqualTypeOf<string | undefined>();

    expect(item.double_tap_to_drop).toBeDefined();
    expectTypeOf(item.double_tap_to_drop).toEqualTypeOf<boolean | undefined>();

    expect(item.hide_from_viewrecipe_command).toBeDefined();
    expectTypeOf(item.hide_from_viewrecipe_command).toEqualTypeOf<boolean | undefined>();

    expect(item.sword_type).toBeDefined();
    expectTypeOf(item.sword_type).toEqualTypeOf<string | undefined>();

    expect(item.ability_damage_scaling).toBeDefined();
    expectTypeOf(item.ability_damage_scaling).toEqualTypeOf<number | undefined>();

    expect(item.tiered_stats).toBeDefined();
    expectTypeOf(item.tiered_stats).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.motes_sell_price).toBeDefined();
    expectTypeOf(item.motes_sell_price).toEqualTypeOf<number | undefined>();

    expect(item.crystal).toBeDefined();
    expectTypeOf(item.crystal).toEqualTypeOf<string | undefined>();

    expect(item.can_burn_in_furnace).toBeDefined();
    expectTypeOf(item.can_burn_in_furnace).toEqualTypeOf<boolean | undefined>();

    expect(item.salvage).toBeDefined();
    expectTypeOf(item.salvage).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.serializable).toBeDefined();
    expectTypeOf(item.serializable).toEqualTypeOf<boolean | undefined>();

    expect(item.can_interact).toBeDefined();
    expectTypeOf(item.can_interact).toEqualTypeOf<boolean | undefined>();

    expect(item.can_interact_right_click).toBeDefined();
    expectTypeOf(item.can_interact_right_click).toEqualTypeOf<boolean | undefined>();

    expect(item.private_island).toBeDefined();
    expectTypeOf(item.private_island).toEqualTypeOf<string | undefined>();

    expect(item.can_have_power_scroll).toBeDefined();
    expectTypeOf(item.can_have_power_scroll).toEqualTypeOf<boolean | undefined>();

    expect(item.can_interact_entity).toBeDefined();
    expectTypeOf(item.can_interact_entity).toEqualTypeOf<boolean | undefined>();

    expect(item.MINING_FORTUNE).toBeDefined();
    expectTypeOf(item.MINING_FORTUNE).toEqualTypeOf<number | undefined>();

    expect(item.recipes).toBeDefined();
    expectTypeOf(item.recipes).toEqualTypeOf<Record<string, any>[] | undefined>();

    expect(item.cannot_reforge).toBeDefined();
    expectTypeOf(item.cannot_reforge).toEqualTypeOf<boolean | undefined>();

    expect(item.lose_motes_value_on_transfer).toBeDefined();
    expectTypeOf(item.lose_motes_value_on_transfer).toEqualTypeOf<boolean | undefined>();

    expect(item.prestige).toBeDefined();
    expectTypeOf(item.prestige).toEqualTypeOf<Record<string, any> | undefined>();
  });
  client.destroy();
});
