module.exports = async function () {
  const Quests = require('../structures/Static/Quests');
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/quests');
  if (res.raw) return res;
  return new Quests(res);
};
