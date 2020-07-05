const fetch = require('node-fetch');

/**
 * @param {string} name
 * @returns {Promise<string>}
 */

module.exports = async (name) => {
  let uuid;
  try {
    const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    const parsedRes = await res.json().catch(() => {
      uuid = null;
      return uuid;
    });

    if (res.status && res.status === 204) {
      uuid = null;
    } else {
      uuid = parsedRes.id;
    }
    return uuid;
  } catch (e) {
    uuid = null;
    return uuid;
  }
};
