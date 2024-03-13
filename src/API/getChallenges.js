module.exports = async function () {
  const Challenges = require('../structures/Static/Challenges');
  const res = await this._makeRequest('/resources/challenges');
  if (res.raw) return res;
  return new Challenges(res);
};
