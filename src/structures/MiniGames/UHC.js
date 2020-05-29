class UHC {
	constructor (data) {
		this.coins = data.coins || 0;
		this.score = data.score || 0;
		this.deaths = data.deaths || 0;
		this.headsEaten = data.heads_eaten || 0;
		this.solo = {
			wins: data.wins_solo || 0,
			kills: data.kills_solo || 0,
			deaths: data.deaths_solo || 0,
			headsEaten: data.heads_eaten_solo || 0
		};
		this.team = {
			wins: data.wins || 0,
			kills: data.kills || 0,
			deaths: data.deaths || 0,
			headsEaten: data.heads_eaten || 0
		};
		this.redVSblue = {
			wins: data['wins_red vs blue'] || 0,
			kills: data['kills_red vs blue'] || 0,
			deaths: data['deaths_red vs blue'] || 0,
			headsEaten: data['heads_eaten_red vs blue'] || 0
		};
		this.noDiamond = {
			wins: data['wins_no diamonds'] || 0,
			kills: data['kills_no diamonds'] || 0,
			deaths: data['deaths_no diamonds'] || 0,
			headsEaten: data['heads_eaten_no diamonds'] || 0
		};
		this.brawl = {
			wins: data.wins_brawl || 0,
			kills: data.kills_brawl || 0,
			deaths: data.deaths_brawl || 0,
			headsEaten: data.heads_eaten_brawl || 0
		};
		this.brawlSolo = {
			wins: data['wins_solo brawl'] || 0,
			kills: data['kills_solo brawl'] || 0,
			deaths: data['deaths_solo brawl'] || 0,
			headsEaten: data['heads_eaten_solo brawl'] || 0
		};
		this.brawlDuo = {
			wins: data['wins_duo brawl'] || 0,
			kills: data['kills_duo brawl'] || 0,
			deaths: data['deaths_duo brawl'] || 0,
			headsEaten: data['heads_eaten_duo brawl'] || 0
		};
	}
}
module.exports = UHC;
