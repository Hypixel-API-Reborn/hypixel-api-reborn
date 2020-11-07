const Errors = require('../Errors');
const toUuid = require('../utils/toUuid');
module.exports = async function (query) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const Friend = require('../structures/Friend');

  query = await toUuid(query);

  const res = await this._makeRequest(`/friends?uuid=${query}`);
  if (res.records.length && res.records.length > 0) {
    return res.records.map(f => new Friend(f));
  } else {
    return [];
  }
};
