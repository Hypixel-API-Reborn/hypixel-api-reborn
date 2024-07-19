const Errors = require('../../Errors');
module.exports = async function (query) {
  if (!query) throw new Error(Errors.NO_UUID);
  const House = require('../../structures/House');
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/housing/house?house=${query}`);
  if (res.raw) return res;
  return new House(res);
};
