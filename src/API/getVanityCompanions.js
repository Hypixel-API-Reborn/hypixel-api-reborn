module.exports = async function () {
  const VanityCompanions = require('../structures/Static/VanityCompanions');
  const res = await this._makeRequest('/resources/vanity/companions');
  if (res.raw) return res;
  return new VanityCompanions(res);
};
