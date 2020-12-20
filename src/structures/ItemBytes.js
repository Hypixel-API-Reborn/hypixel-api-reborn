const nbt = require('prismarine-nbt');
const parseNbt = (require('util')).promisify(nbt.parse);
class ItemBytes {
  constructor (data) {
    this.bytesBuffer = Buffer.from(data, 'base64');
  }

  get base64 () {
    return this.bytesBuffer.toString('base64');
  }

  async readNBT () {
    let data = await parseNbt(this.bytesBuffer);
    data = nbt.simplify(data);
    return Array.from(data.i);
  }
}
module.exports = ItemBytes;
