/* eslint-disable no-extend-native */
const fs = require('fs');
if (!Array.prototype.flat) {
  Object.defineProperty(Array.prototype, 'flat', {
    configurable: true,
    value: function flat () {
      const depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);

      return depth ? Array.prototype.reduce.call(this, function (acc, cur) {
        if (Array.isArray(cur)) {
          acc.push.apply(acc, flat.call(cur, depth - 1));
        } else {
          acc.push(cur);
        }

        return acc;
      }, []) : Array.prototype.slice.call(this);
    },
    writable: true
  });
}
// eslint-disable-next-line no-path-concat
const curDir = __dirname + '/';
module.exports = Array.from(fs.readdirSync(curDir, { withFileTypes: true }))
  .filter(x => x.name !== 'index.js')
  .map(x => x.isDirectory() ? Array.from(fs.readdirSync(curDir + x.name)).map(y => ([y.split('.')[0], x.name + '/' + y])) : [[x.name.split('.')[0], x.name]])
  .flat(1)
  .reduce((pV, cV) => Object.assign(pV, { [cV[0]]: require(curDir + cV[1]) }), {});
