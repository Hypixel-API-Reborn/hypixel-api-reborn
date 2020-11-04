const fetch = require('node-fetch');
const isUUID = require('./isUUID.js');
const Errors = require('../Errors');

module.exports = async (input) => {
  if (typeof input !== 'string') throw new Error(Errors.UUID_NICKNAME_MUST_BE_A_STRING);
  if (isUUID(input)) return input.replace(/-/g, '');
  const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${input}`);
  const parsedRes = await res.json();
  if (parsedRes.error) {
    throw new Error(Errors.MALFORMED_UUID);
  }
  return parsedRes.id;
};
