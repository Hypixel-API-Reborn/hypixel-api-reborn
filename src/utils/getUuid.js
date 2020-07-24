const fetch = require('node-fetch');
module.exports = async (name) => {
  try {
    const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    const parsedRes = await res.json();
    if (res.status && res.status === 204) {
      return null;
    }
    return parsedRes.id;
  } catch (e) {
    return null;
  }
};
