const fetch = require('../Private/uuidCache.js');
const isUUID = require('./isUUID.js');
const Errors = require('../Errors');

module.exports = async (input, cacheTime = 600, useThirdPartyAPI = '') => {
  if (!input) throw new Error(Errors.NO_NICKNAME_UUID);
  if (typeof input !== 'string') throw new Error(Errors.UUID_NICKNAME_MUST_BE_A_STRING);
  if (isUUID(input)) return input.replace(/-/g, '');
  try {
    const customUrl = useThirdPartyAPI === true ? 'https://api.minetools.eu/uuid/' : useThirdPartyAPI;
    const url = useThirdPartyAPI ? `${customUrl}${input}` : `https://mowojang.matdoes.dev/${input}`;
    const res = await fetch(url, input, cacheTime);
    if (res.status === 404) {
      return Promise.reject(new Error(Errors.PLAYER_DOES_NOT_EXIST));
    } else if (res.status !== 200) {
      throw new Error('Unknown Error whilst retrieving player information');
    }
    return res.id;
  } catch {
    // 2nd Try
    if (!useThirdPartyAPI) return module.exports(input, cacheTime, true);
    throw new Error(Errors.PLAYER_DOES_NOT_EXIST);
  }
};
