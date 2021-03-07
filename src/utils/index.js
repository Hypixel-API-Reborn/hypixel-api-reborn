/* eslint-disable no-extend-native */
const fs = require('fs');
// eslint-disable-next-line no-path-concat
const curDir = __dirname + '/';
module.exports = Array.from(fs.readdirSync(curDir, { withFileTypes: true }))
  .filter((x) => x.name !== 'index.js')
  .map((x) => x.isDirectory() ? Array.from(fs.readdirSync(curDir + x.name)).map((y) => ([y.split('.')[0], x.name + '/' + y])) : [[x.name.split('.')[0], x.name]])
  .flat(1)
  .reduce((pV, cV) => Object.assign(pV, { [cV[0]]: require(curDir + cV[1]) }), {});
