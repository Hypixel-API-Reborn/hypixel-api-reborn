/* eslint-disable jsdoc/require-jsdoc */
const ServerInfo = require('../structures/ServerInfo');
const varInt = require('../utils/varInt');
const Errors = require('../Errors');
const net = require('net');
const packetsToSend = ['1500E0050E6D632E6879706978656C2E6E657463DD01', '0100', '09010000000000000000'].map((x) =>
  // To avoid dependency hell, these are precompiled as hex.
  Buffer.from(x, 'hex')
);

async function ping(cli) {
  await cli.write(packetsToSend[2]);
  const time = Date.now();
  return new Promise((resolve) => {
    cli.once('data', () => {
      resolve(Date.now() - time);
    });
  });
}

async function getPing(amount, cli) {
  let pingSum = 0;
  for (let i = 0; i < amount; i++) {
    pingSum += await ping(cli);
  }
  cli.destroy();
  return Math.round(pingSum / amount);
}

function parseData(stringJson, ping) {
  try {
    return new ServerInfo(JSON.parse(stringJson), ping);
  } catch {
    return undefined;
  }
}

module.exports = async function (repeats) {
  if (0 > repeats || 'number' !== typeof repeats) repeats = 3;
  if (10 < repeats) repeats = 10;
  let aggregatedData = '';
  let dataLength = 0;
  return await new Promise((resolve, reject) => {
    const cli = net.createConnection(25565, 'mc.hypixel.net', () => {
      cli.write(packetsToSend[0]);
      cli.write(packetsToSend[1]);
    });
    cli.on('error', () => {
      reject(Errors.CONNECTION_ERROR);
    });
    cli.on('data', async (data) => {
      if (!aggregatedData) {
        const varIntBorder = data.findIndex((x) => 0x00 === x) + 1;
        dataLength = varInt(
          data
            .toString('hex', 0, varIntBorder)
            .match(/(..)/g)
            .map((x) => parseInt(x, 16))
        );
        dataLength -= varIntBorder * 8;
        aggregatedData += data.toString('utf-8', 5);
      } else {
        aggregatedData += data.toString('utf-8');
      }

      if (dataLength >= aggregatedData.length) return;
      cli.removeAllListeners('data');
      resolve(parseData(aggregatedData, await getPing(repeats, cli)));
    });
  });
};
