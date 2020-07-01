class Item {
	constructor(data) {
		this.itemId = data.id || 0;
		this.count = data.Count || 0;
		this.name = data.tag && data.tag.display.Name !== null ? data.tag.display.Name.replace(/§([1-9]|[a-f])|§/gm, '') : null;
		this.lore = data.tag ? data.tag.display.Lore.join('<br>') : null;
		this.loreToEmbed = function () {
			return this.lore.replace(/<br>/gm, '\n');
		};
		this.enchantments = data.tag.ExtraAttributes.enchantments !== undefined ? data.tag.ExtraAttributes.enchantments : null;
		this.anvilUses = data.tag.ExtraAttributes.anvil_uses !== undefined ? data.tag.ExtraAttributes.anvil_uses : 0;
		this.damage = data.Damage || 0;
	}
}

module.exports = Item;
