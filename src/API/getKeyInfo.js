const Errors = require('../Errors');
module.exports = async function () {
  const KeyInfo = require('../structures/KeyInfo');
  const res = await this._makeRequest('/key');
  if (!res[0].success) {
    throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
  };
  return new KeyInfo([res[0].record, res[1]]);
};
