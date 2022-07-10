/* eslint-disable require-jsdoc */
const {writeFileSync, readdirSync} = require('fs');

function noJS(name) {
  return name.replace(/\.js$/, '');
}

const generated = readdirSync(__dirname)
  .filter((name)=>!name.startsWith('index') && name.endsWith('.js'))
  .map((name)=>`${noJS(name)}: require('./${name}')`);
const generatedSkyblock = readdirSync(__dirname+'/skyblock')
  .map((name)=>`${noJS(name)}: require('./skyblock/${name}')`);
const template = `module.exports = {
  ${generated.join(`,
  `)},

  skyblock: {
    ${generatedSkyblock.join(`,
    `)}
  }
};
`;

writeFileSync(__dirname+'/index.js.generated', template);
