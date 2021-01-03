const fetch = require('../Private/uuidCache.js');
const isUUID = require('./isUUID.js');
const Errors = require('../Errors');

module.exports = async (input) => {
  try {
    if (!input) throw new Error(Errors.NO_NICKNAME_UUID);
    if (typeof input !== 'string') throw new Error(Errors.UUID_NICKNAME_MUST_BE_A_STRING);
    if (isUUID(input)) input = input.replace(/-/g, '');
    else throw new Error(Errors.MALFORMED_UUID);
    const res = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${input}`, input);
    const parsedRes = await res.json();
    if (parsedRes.error) {
      throw new Error(Errors.MALFORMED_UUID);
    }
    return parsedRes.name;
  } catch (e) {
    throw new Error(Errors.PLAYER_DOES_NOT_EXIST);
  }
};
