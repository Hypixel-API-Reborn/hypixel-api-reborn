const fetch = require('node-fetch');
const isUUID=require("./isUUID.js");
module.exports = async (input) => {
  try {
    if(isUUID(input)) return input.replace(/-/g,"");
    const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${input}`);
    if (res.status && res.status === 204) {
      return null;
    }
    const parsedRes = await res.json();
    return parsedRes.id;
  } catch (e) {
    return null;
  }
};
