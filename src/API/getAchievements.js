module.exports = async function () {
  const Achievements = require('../structures/Static/Achievements');
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/achievements');
  if (res.raw) return res;
  return new Achievements(res);
};
