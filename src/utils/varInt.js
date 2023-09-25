// eslint-disable-next-line require-jsdoc
function readVarInt(bytes) {
  let numRead = 0;
  let result = 0;
  do {
    const read = bytes[numRead];
    const value = read & 0b01111111;
    result |= value << (7 * numRead);
    numRead++;
    if (numRead > 5) {
      return NaN;
    }
  } while (numRead < bytes.length);

  return result;
}
module.exports = readVarInt;
