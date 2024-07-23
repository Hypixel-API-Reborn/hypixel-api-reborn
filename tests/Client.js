/* eslint-disable no-undef */
const { Client } = require('../src');
module.exports = {
  client: new Client(process.env.HYPIXEL_KEY)
};
