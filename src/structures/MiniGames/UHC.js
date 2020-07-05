class UHC {
  constructor (data) {
    this.coins = data.coins || 0;
    this.score = data.score || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.wins = data.wins || 0;
    this.headsEaten = data.heads_eaten || 0;
    this.starLevel = getStarLevel(data);
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
function getStarLevel (data) {
  const kills = data.kills || 0;
  const wins = data.wins || 0;
  const sum = ((kills * 1) + (wins * 10));
  let starLevel = 1;
  if (sum >= 10) {
    starLevel = 2;
  } else if (sum >= 60) {
    starLevel = 3;
  } else if (sum >= 210) {
    starLevel = 4;
  } else if (sum >= 460) {
    starLevel = 5;
  } else if (sum >= 960) {
    starLevel = 6;
  } else if (sum >= 1710) {
    starLevel = 7;
  } else if (sum >= 2710) {
    starLevel = 8;
  } else if (sum >= 5210) {
    starLevel = 9;
  } else if (sum >= 10210) {
    starLevel = 10;
  } else if (sum >= 13210) {
    starLevel = 11;
  } else if (sum >= 16210) {
    starLevel = 12;
  } else if (sum >= 19210) {
    starLevel = 13;
  } else if (sum >= 22210) {
    starLevel = 14;
  } else if (sum >= 25210) {
    starLevel = 15;
  }
  return starLevel;
}
module.exports = UHC;
