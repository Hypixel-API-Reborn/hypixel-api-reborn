module.exports = (rgb) => {
  let hexCode = '#';
  for (const num of rgb) {
    const hex = Number(num).toString(16);
    hexCode += 1 === hex.length ? '0' + hex : hex;
  }
  return hexCode;
};
