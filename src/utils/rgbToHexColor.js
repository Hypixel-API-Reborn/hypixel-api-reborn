module.exports = (rgb) => {
  let hexCode = '#';
  for (const num of rgb) {
    const hex = Number(num).toString(16);
    hexCode += (hex.length === 1 ? '0' + hex : hex);
  }
  return hexCode;
};
