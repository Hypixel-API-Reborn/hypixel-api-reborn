module.exports = async function () {
  const Challenges = require('../structures/Static/Challenges');
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/challenges');
  if (res.raw) return res;
  return new Challenges(res);
};
