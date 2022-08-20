const { decode } = require('../utils/SkyblockUtils');
/**
 * Item Bytes class
 */
class ItemBytes {
  /**
   * @param {string} data base64 encoded bytes
   */
  constructor (data) {
    /**
   *  Item Bytes as Buffer
   * @type {Buffer}
   */
    this.bytesBuffer = Buffer.from(data, 'base64');
  }

  /**
   * Returns Item Bytes in base64 encoded
   * @return {String}
   */
  base64 () {
    return this.bytesBuffer.toString('base64');
  }

  /**
   * Returns NBT of Item Bytes
   * @return {any[]}
   */
  async readNBT () {
    return await decode(this.bytesBuffer, true);
  }
}
module.exports = ItemBytes;
