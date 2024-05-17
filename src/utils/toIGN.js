const fetch = require('../Private/uuidCache.js');
const isUUID = require('./isUUID.js');
const Errors = require('../Errors');

module.exports = async (input, useThirdPartyAPI = '') => {
  if (!input) throw new Error(Errors.NO_NICKNAME_UUID);
  if (typeof input !== 'string') throw new Error(Errors.UUID_NICKNAME_MUST_BE_A_STRING);
  if (isUUID(input)) input = input.replace(/-/g, '');
  else throw new Error(Errors.MALFORMED_UUID);
  try {
    const customUrl = useThirdPartyAPI === true ? 'https://api.minetools.eu/uuid/' : useThirdPartyAPI;
    const url = useThirdPartyAPI ? `${customUrl}${input}` : `https://mowojang.matdoes.dev/${input}`;
    const res = await fetch(url, input);
    const parsedRes = await res.json();
    if (parsedRes.error) {
      return Promise.reject(new Error(Errors.MALFORMED_UUID));
    }
    return parsedRes.name;
  } catch {
    // 2nd try
    if (!useThirdPartyAPI) return module.exports(input, cacheTime, true);
    throw new Error(Errors.PLAYER_DOES_NOT_EXIST);
  }
};
