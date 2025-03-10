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

    expect(item.museumData).toBeDefined();
    expectTypeOf(item.museumData).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.hasUuid).toBeDefined();
    expectTypeOf(item.hasUuid).toEqualTypeOf<boolean | string | undefined>();

    expect(item.gemstoneSlots).toBeDefined();
    expectTypeOf(item.gemstoneSlots).toEqualTypeOf<Record<string, any>[] | undefined>();

    expect(item.glowing).toBeDefined();
    expectTypeOf(item.glowing).toEqualTypeOf<boolean | undefined>();

    expect(item.canAuction).toBeDefined();
    expectTypeOf(item.canAuction).toEqualTypeOf<boolean | undefined>();

    expect(item.canTrade).toBeDefined();
    expectTypeOf(item.canTrade).toEqualTypeOf<boolean | undefined>();

    expect(item.requirements).toBeDefined();
    expectTypeOf(item.requirements).toEqualTypeOf<Record<string, any>[] | undefined>();

    expect(item.canPlace).toBeDefined();
    expectTypeOf(item.canPlace).toEqualTypeOf<boolean | undefined>();

    expect(item.museum).toBeDefined();
    expectTypeOf(item.museum).toEqualTypeOf<boolean | undefined>();

    expect(item.generator).toBeDefined();
    expectTypeOf(item.generator).toEqualTypeOf<string | undefined>();

    expect(item.generatorTier).toBeDefined();
    expectTypeOf(item.generatorTier).toEqualTypeOf<number | undefined>();

    expect(item.furniture).toBeDefined();
    expectTypeOf(item.furniture).toEqualTypeOf<string | undefined>();

    expect(item.itemSpecific).toBeDefined();
    expectTypeOf(item.itemSpecific).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.description).toBeDefined();
    expectTypeOf(item.description).toEqualTypeOf<string | undefined>();

    expect(item.upgradeCosts).toBeDefined();
    expectTypeOf(item.upgradeCosts).toEqualTypeOf<Array<Array<Record<string, any>>> | undefined>();

    expect(item.gearScore).toBeDefined();
    expectTypeOf(item.gearScore).toEqualTypeOf<number | undefined>();

    expect(item.dungeonItem).toBeDefined();
    expectTypeOf(item.dungeonItem).toEqualTypeOf<boolean | undefined>();

    expect(item.dungeonItemConversionCost).toBeDefined();
    expectTypeOf(item.dungeonItemConversionCost).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.catacombsRequirements).toBeDefined();
    expectTypeOf(item.catacombsRequirements).toEqualTypeOf<Record<string, any>[] | undefined>();

    expect(item.canHaveAttributes).toBeDefined();
    expectTypeOf(item.canHaveAttributes).toEqualTypeOf<boolean | undefined>();

    expect(item.salvageableFromRecipe).toBeDefined();
    expectTypeOf(item.salvageableFromRecipe).toEqualTypeOf<boolean | undefined>();

    expect(item.canRecombobulate).toBeDefined();
    expectTypeOf(item.canRecombobulate).toEqualTypeOf<boolean | undefined>();

    expect(item.enchantments).toBeDefined();
    expectTypeOf(item.enchantments).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.riftTransferrable).toBeDefined();
    expectTypeOf(item.riftTransferrable).toEqualTypeOf<boolean | undefined>();

    expect(item.origin).toBeDefined();
    expectTypeOf(item.origin).toEqualTypeOf<string | undefined>();

    expect(item.doubleTapToDrop).toBeDefined();
    expectTypeOf(item.doubleTapToDrop).toEqualTypeOf<boolean | undefined>();

    expect(item.hideFromViewRecipeCommand).toBeDefined();
    expectTypeOf(item.hideFromViewRecipeCommand).toEqualTypeOf<boolean | undefined>();

    expect(item.swordType).toBeDefined();
    expectTypeOf(item.swordType).toEqualTypeOf<string | undefined>();

    expect(item.abilityDamageScaling).toBeDefined();
    expectTypeOf(item.abilityDamageScaling).toEqualTypeOf<number | undefined>();

    expect(item.tieredStats).toBeDefined();
    expectTypeOf(item.tieredStats).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.motesSellPrice).toBeDefined();
    expectTypeOf(item.motesSellPrice).toEqualTypeOf<number | undefined>();

    expect(item.crystal).toBeDefined();
    expectTypeOf(item.crystal).toEqualTypeOf<string | undefined>();

    expect(item.canBurnInFurnace).toBeDefined();
    expectTypeOf(item.canBurnInFurnace).toEqualTypeOf<boolean | undefined>();

    expect(item.salvage).toBeDefined();
    expectTypeOf(item.salvage).toEqualTypeOf<Record<string, any> | undefined>();

    expect(item.serializable).toBeDefined();
    expectTypeOf(item.serializable).toEqualTypeOf<boolean | undefined>();

    expect(item.canInteract).toBeDefined();
    expectTypeOf(item.canInteract).toEqualTypeOf<boolean | undefined>();

    expect(item.canInteractRightClick).toBeDefined();
    expectTypeOf(item.canInteractRightClick).toEqualTypeOf<boolean | undefined>();

    expect(item.privateIsland).toBeDefined();
    expectTypeOf(item.privateIsland).toEqualTypeOf<string | undefined>();

    expect(item.canHavePowerScroll).toBeDefined();
    expectTypeOf(item.canHavePowerScroll).toEqualTypeOf<boolean | undefined>();

    expect(item.canInteractEntity).toBeDefined();
    expectTypeOf(item.canInteractEntity).toEqualTypeOf<boolean | undefined>();

    expect(item.miningFortune).toBeDefined();
    expectTypeOf(item.miningFortune).toEqualTypeOf<number | undefined>();

    expect(item.recipes).toBeDefined();
    expectTypeOf(item.recipes).toEqualTypeOf<Record<string, any>[] | undefined>();

    expect(item.cannotReforge).toBeDefined();
    expectTypeOf(item.cannotReforge).toEqualTypeOf<boolean | undefined>();

    expect(item.loseMotesValueOnTransfer).toBeDefined();
    expectTypeOf(item.loseMotesValueOnTransfer).toEqualTypeOf<boolean | undefined>();

    expect(item.prestige).toBeDefined();
    expectTypeOf(item.prestige).toEqualTypeOf<Record<string, any> | undefined>();
  });
  client.destroy();
});
