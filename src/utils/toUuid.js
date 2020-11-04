const fetch = require('node-fetch');
const isUUID = require('./isUUID.js');
const Errors = require('../Errors');

module.exports = async (input) => {
  if (isUUID(input)) return input.replace(/-/g, '');
  const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${input}`);
  const parsedRes = await res.json();
  if (parsedRes.error) {
    throw new Error(Errors.MALFORMED_UUID);
  }
  return parsedRes.id;
};
