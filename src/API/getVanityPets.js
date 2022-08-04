module.exports = async function () {
  const VanityPets = require('../structures/Static/VanityPets');
  const res = await this._makeRequest('/resources/vanity/pets');
  if (res.raw) return res;
  return new VanityPets(res);
};
