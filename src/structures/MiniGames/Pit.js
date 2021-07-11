/* eslint-disable max-len */
const divide = require('../../utils/divide');

function EventFormatter(data) {
	const Events = Object.keys(data);
	const finalData = {};
	for (const event of Events) {
		const year = event.match(/(\d{4})/g)[0];
		const yearInfo = (finalData[year]) ? finalData[year] : {};
		const eventName = event
			.replace("Pit_", '')
			.replace(/_\d{4}/g, '')
		yearInfo[eventName] = data[event];

		//			.replace("Pit_", '')
		// .replace(/_\d{4}/g, '')

		finalData[year] = yearInfo
	}
	return finalData;
}


// @TODO: PitItem & PitUtils
async function decode(base64) {
	const nbt = require('prismarine-nbt');
	const parseNbt = (require('util')).promisify(nbt.parse);
	const buffer = Buffer.from(base64, 'base64');
	let data = await parseNbt(buffer);
	data = nbt.simplify(data);
	const newdata = [];
	for (let i = 0; i < data.i.length; i++) {
		if (data.i[i]) {
			newdata.push(data.i[i]);
		}
	}
	return newdata.filter(x => !(JSON.stringify(x) == '{}'));
};

function unlocksFormat(data) {
	let finalData = {};
	for (const unlock of data) {
		if (!finalData[unlock.tier]) finalData[unlock.tier] = [];
		finalData[unlock.tier][unlock.key] = {
			acquireTimestamp: unlock.Date,
		}
	}
	return finalData;
}

function prestigeInfo(data) {
	let finalData = {};

	for (const name of Object.keys(data)
		.filter(x => x.startsWith('cash_during_prestige_'))
		.sort((a, b) => a.split('_')[3] - b.split('_')[3])) {
		if (!finalData[name.split('_')[3]]) finalData[name.split('_')[3]] = [];
		finalData[name.split('_')[3]]["cashOnPrestige"] = data[name];
	}

	for (const name of Object.keys(data)
		.filter(x => x.startsWith('unlocks_'))
		.sort((a, b) => a.split('_')[1] - b.split('_')[1])) {
		finalData[name.split('_')[1]]["unlocks"] = data[name];

	}

	for (const name of data.prestiges) {
		finalData[name.index]["info"] = {
			xpOnPrestige: name.xp_on_prestige,
			prestigeTimestmap: name.timestamp,
		};
	}

	return finalData;

}

function goldStackStreak(data) {
	let finalData = {};
	for (const name of Object.keys(data)
		.filter(x => x.startsWith('gold_stack_streak_'))
		.sort((a, b) => a.split('_')[3] - b.split('_')[3])) {
		finalData[name.split('_')[3]] = data[name];
	}
	return finalData;
}

/**
 * Pit Class
 */
class Pit {
	/**
	 * Constructor
		  * @param {object} data Pit data
	 */
	// @TODO: Death Recaps
	constructor(data) {
		// return (async () => {
		/**
		 * Deaths
		 * @type {number}
		 */
		this.deaths = data.pit_stats_ptl.deaths || 0;
		/**
			 * Kills
			 * @type {number}
			 */
		this.kills = data.pit_stats_ptl.kills || 0;
		/**
			 * Kill Death Ratio
			 * @type {number}
			 */
		this.killDeathRatio = divide(this.kills, this.deaths) || 0;
		/**
			 * Assists
			 * @type {number}
			 */
		this.assists = data.pit_stats_ptl.assists || 0;
		/**
			 * Playtime
			 * @type {number}
			 */
		this.playtime = data.pit_stats_ptl.playtime_minutes || 0;
		/**
			 * Joins
			 * @type {number}
			 */
		this.joins = data.pit_stats_ptl.joins || 0;
		/**
			 * Jumped Into Put
			 * @type {number}
			 */
		this.jumpedIntoPit = data.pit_stats_ptl.jumped_into_pit || 0;
		/**
		* Highest Streak
		* @type {number}
		*/
		this.highestStreak = data.pit_stats_ptl.max_streak || 0;
		/**
		* XP
		* @type {number}
		*/
		this.xp = data.profile.xp || 0;
		// this.inventory = {
		// 	player: await decode(data.profile.inv_contents.data) || null,
		// 	playerArmor: await decode(data.profile.inv_armor.data) || null,
		// 	enderchest: await decode(data.profile.inv_enderchest.data) || null,
		// 	itemStash: await decode(data.profile.item_stash.data) || null,
		// 	spireStash: await decode(data.profile.spire_stash_inv.data) || null,
		// 	spireStashArmor: await decode(data.profile.spire_stash_armor.data) || null,
		// 	// hotbar: await decode(data.profile.hotbar_favorites) || null,
		// };
		/**
		* Trade Timestamps
		* @type {any}
		*/
		this.tradeTimestamps = data.profile.trade_timestamps || null;
		/**
		* Last Mid Fight Disconnect
		* @type {number}
		*/
		this.lastMidfightDisconnect = data.profile.last_midfight_disconnect || null;
		this.lastSave = data.profile.last_save || null;
		this.loginMessages = data.profile.loginMessages || null;
		this.selectedLeaderboard = data.selected_leaderboard || null;
		this.stats = {
			leftClicks: data.pit_stats_ptl.left_clicks || 0,
			swordHits: data.pit_stats_ptl.sword_hits || 0,
			hitsLandedPercentage: (Math.round((((data.pit_stats_ptl.sword_hits || 0) / (data.pit_stats_ptl.left_clicks || 0) * 100) || 0 + Number.EPSILON) * 100) / 100) || 0,
			arrowHits: data.pit_stats_ptl.arrow_hits || 0,
			arrowsFired: data.pit_stats_ptl.arrows_fired || 0,
			endlessQuiverArrows: data.pit_stats_ptl.endless_quiver_arrows || 0,
			bowDamageDealt: data.pit_stats_ptl.bow_damage_dealt || 0,
			bowDamageRecieved: data.pit_stats_ptl.bow_damage_received || 0,
			damageDealt: data.pit_stats_ptl.damage_dealt || 0,
			damageRecieved: data.pit_stats_ptl.damage_received || 0,
			meleeDamageDealt: data.pit_stats_ptl.melee_damage_dealt || 0,
			meleeDamageRecieved: data.pit_stats_ptl.melee_damage_recieved || 0,
			vampireHealedHP: data.pit_stats_ptl.vampire_healed_hp || 0,
			trickleDownHP: data.pit_stats_ptl.extra_from_trickle_down || 0,
			goldenHeadsEaten: data.pit_stats_ptl.ghead_eaten || 0,
			gapplesEaten: data.pit_stats_ptl.gapple_eaten || 0,
			blocksPlaced: data.pit_stats_ptl.blocks_placed || 0,
			blocksBroken: data.pit_stats_ptl.blocks_broken || 0,
			obsidianBroken: data.pit_stats_ptl.obsidian_broken || 0,
			enderchestOpened: data.pit_stats_ptl.enderchest_opened || 0,
			chatMessages: data.pit_stats_ptl.chat_messages || 0,
			lavaBucketEmptied: data.pit_stats_ptl.lava_bucket_emptied || 0,
			wheatFarmed: data.pit_stats_ptl.wheat_farmed || 0,
			soupsDrank: data.pit_stats_ptl.soups_drank || 0,
			ragePotatoesEaten: data.pit_stats_ptl.rage_potatoes_eaten || 0,
			fishingRodLaunched: data.pit_stats_ptl.fishing_rod_launched || 0,
			ragePantsCrafted: data.pit_stats_ptl.rage_pants_crafted || 0,
			sewerTreatureFound: data.pit_stats_ptl.sewer_treasures_found || 0,
			nightQuestsCompleted: data.pit_stats_ptl.night_quests_completed || 0,
			kingQuestsCompleted: data.pit_stats_ptl.king_quest_completion || 0,
			kingQuest: {
				kingQuestsCompleted: data.pit_stats_ptl.king_quest_completion || 0,
				kills: data.profile.king_quest.kills || 0,
				renown: data.profile.king_quest.renown || 0,
				lastCompleted: data.profile.king_quest.last_completed || null,
				lastAccepted: data.profile.king_quest.last_accepted || null,
			},
			fishing: {
				anything: data.pit_stats_ptl.fished_anything || 0,
				fish: data.pit_stats_ptl.fishes_fished || 0,
			},
			darkPants: {
				darkPantsCrated: data.pit_stats_ptl.dark_pants_crated || 0,
				darkPantsT2: data.pit_stats_ptl.dark_pants_t2 || 0,
				ragePantsCrafted: data.pit_stats_ptl.rage_pants_crafted || 0,
			},
			goldFromFarming: data.pit_stats_ptl.gold_from_farming || 0,
			bountiesOf500gWithBh: data.pit_stats_ptl.bounties_of_500g_with_bh || 0,
			hiddenJewelTriggers: data.pit_stats_ptl.hidden_jewel_triggers || 0,
			lastMidfightDisconnect: data.profile.last_midfight_disconnect || 0,
		}

		this.bounties = data.profile.bounties || null;
		this.outgoingOffers = data.profile.outgoing_offers || null;

		this.money = {
			balance: data.profile.cash || 0,
			totalEarned: data.pit_stats_ptl.cash_earned || 0,
			totalSpend: (data.pit_stats_ptl.cash_earned - data.profile.cash) || 0,
			ingotsCash: data.pit_stats_ptl.ingots_cash || 0,
			ingotsPickedUp: data.pit_stats_ptl.ingots_picked_up || 0,
			diamondItemsPurchased: data.pit_stats_ptl.diamond_items_purchased || 0,
			lastPurchase: data.profile.items_last_buy || null,
			transactions: data.profile.gold_transactions || null,
			autobuy: data.profile.autobuy_items || null,
		}
		this.launched = {
			angel: data.pit_stats_ptl.launched_by_angel_spawn || 0,
			demon: data.pit_stats_ptl.launched_by_demon_spawn || 0,
			launcher: data.pit_stats_ptl.launched_by_launchers || 0,
		}

		this.contracts = {
			choices: data.profile.contract_choices || null,
			completed: data.pit_stats_ptl.contracts_completed || 0,
			started: data.pit_stats_ptl.contracts_started || 0,
			last_contract: data.profile.last_contract || null,
			completedPercentage: (Math.round((((data.pit_stats_ptl.contracts_completed || 0) / (data.pit_stats_ptl.contracts_started || 0) * 100) || 0 + Number.EPSILON) * 100) / 100) || 0,
			activeContracts: data.profile.ended_contracts || null,
		}

		this.renown = {
			renown: data.profile.renown || 0,
			unlocks: unlocksFormat(data.profile.renown_unlocks) || null,
		}

		this.enchanting = {
			1: data.pit_stats_ptl.enchanted_tier1 || 0,
			2: data.pit_stats_ptl.enchanted_tier2 || 0,
			3: data.pit_stats_ptl.enchanted_tier3 || 0,
		}

		// this.eventStats = EventFormatter(data.profile.leaderboard_stats) || null;
		// this.prestige = prestigeInfo(data.profile) || null;

		this.perks = {
			1: data.profile.selected_perk_0 || null,
			2: data.profile.selected_perk_1 || null,
			3: data.profile.selected_perk_2 || null,
			4: data.profile.selected_perk_3 || null,
		}

		this.killstreaks = {
			1: data.profile.selected_killstreak_1 || null,
			2: data.profile.selected_killstreak_2 || null,
			3: data.profile.selected_killstreak_3 || null,
		}
		this.unlocks = unlocksFormat(data.profile.unlocks) || null;
		this.lastLycanthropy = data.profile.last_lycanthropy || null;
		this.cheapMilk = data.profile.cheap_milk || false;
		this.genesis = {
			points: data.profile.genesis_points || 0,
			permaGold: data.profile.genesis_weekly_perks_perma_gold || 0,
			allegiance: data.profile.genesis_allegiance || null,
			allegianceTime: data.profile.genesis_allegiance_time || null,
			permaAngel: data.profile.genesis_perma_angel || null,
			permaDemon: data.profile.genesis_perma_demon || null,
			spawnInBase: data.profile.genesis_spawn_in_base || false,
			perksPermaXp: data.profile.genesis_weekly_perks_perma_xp || null,
			claimWeeklyItemAngel: data.profile.genesis_weekly_perks_claim_item_angel || null,
			claimWeeklyItemDemon: data.profile.genesis_weekly_perks_claim_item_demon || null,
		}
		this.settings = {
			dropConfirmDisabled: data.profile.drop_confirm_disabled || false,
			hat: data.profile.hat_enabled || true,
			impatient: data.profile.impatient_enabled || true,
			chat: {
				player: data.profile.chat_option_player_chat || true,
				bounties: data.profile.chat_option_bounties || true,
				prestigeAnnouncements: data.profile.chat_option_prestige_announcements || true,
				killFeed: data.profile.chat_option_kill_feed || true,
				streaks: data.profile.chat_option_streaks || true,
				misc: data.profile.chat_option_misc || true,
			}
		}
		this.packages = data.packages || [];
		this.goldStackStreak = goldStackStreak(data.profile);

		/* 
		//// NOT DONE \\\\
		// Couldn't figure our what they were used for.
		death_recaps: { type: 0, data: [Array] },
		shops_throttle: { buyer_Bread: [Object], Bread: [Object] },
		hat_color: 0,
		moved_achievements_1: true,
		moved_achievements_2: true,
		uberdrop_mystic_stacks: 1,
		zero_point_three_gold_transfer: true,
		hotbar_favorites: [
			0, 262, 261,   0,
				383, 300, 261, 300,
				304
		],
		*/

		// return this;
		// })();
	}
}

module.exports = Pit;
