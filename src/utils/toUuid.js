const fetch = require('../Private/uuidCache');
const isUUID = require('./isUUID.js');
const Errors = require('../Errors');

module.exports = async (input) => {
  if (!input) throw new Error(Errors.NO_NICKNAME_UUID);
  if (typeof input !== 'string') throw new Error(Errors.UUID_NICKNAME_MUST_BE_A_STRING);
  if (isUUID(input)) return input.replace(/-/g, '');
  try {
    const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${input}`, input);
    const parsedRes = await res.json();
    if (res.status === 404) {
      return Promise.reject(new Error(Errors.PLAYER_DOES_NOT_EXIST));
    }
    return parsedRes.id;
  } catch {
    throw new Error(Errors.PLAYER_DOES_NOT_EXIST);
  }
};
