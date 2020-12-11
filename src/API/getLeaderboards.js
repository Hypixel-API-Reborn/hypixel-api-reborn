const Errors = require('../Errors');
module.exports = async function () {
  const Leaderboard = require('../structures/Leaderboard');
  const res = await this._makeRequest('/leaderboards');
  if (!res.leaderboards) throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
  const lbnames = Object.create(require('../utils/Constants').leaderboardNames);
  for (const name in lbnames) {
    lbnames[name] = res.leaderboards[lbnames[name]].length ? res.leaderboards[lbnames[name]].map(lb => new Leaderboard(lb)) : [];
  }
  return lbnames;
};
