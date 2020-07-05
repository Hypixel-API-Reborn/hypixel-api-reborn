class BuildBattle {
  constructor (data) {
    this.score = data.score || 0;
    this.playedGames = data.games_played || 0;
    this.coins = data.coins || 0;
    this.totalVotes = data.total_votes || 0;
    this.winsTotal = data.wins || 0;
    this.wins = {
      solo: data.wins_solo_normal || 0,
      team: data.wins_teams_normal || 0,
      pro: data.wins_solo_pro || 0,
      gtb: data.wins_guess_the_build || 0
    };
  }
}

module.exports = BuildBattle;
