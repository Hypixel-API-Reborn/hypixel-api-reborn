const toUuid = require('../utils/toUuid');
module.exports = async function (query) {
  const Status = require('../structures/Status');
  query = await toUuid(query);
  const res = await this._makeRequest(`/status?uuid=${query}`);
  if (res.raw) return res;
  return new Status(res.session);
};
