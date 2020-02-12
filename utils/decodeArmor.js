const nbt = require('prismarine-nbt');
const util = require('util')
const parseNbt = util.promisify(nbt.parse)

module.exports = async function(base64) {
    let buffer = Buffer.from(base64, 'base64');
    let data = await parseNbt(buffer)
    data = nbt.simplify(data);
    return data
}